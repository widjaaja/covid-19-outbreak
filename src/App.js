
import React, { useState, Component, Fragment } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css'
import Marker from './marker';
import Aside from './aside';
import Summary from './summary';
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: [],
      confirmed: 0,
      deaths: 0,
      recovered: 0,
      center: {lat: -1.9132401, lng: 108.6051593 },
      zoom: 5,
      isLoading: false
    }
};
    async componentDidMount() {
      this.setState({isLoading: true})
      await axios.get("https://coronavirus-tracker-api.herokuapp.com/all")
      .then(response => response.data)
      .then((data) => {
        this.setState({ 
          data: data, 
          locations: data.confirmed.locations,
          confirmed: data.latest.confirmed,
          deaths: data.latest.deaths,
          recovered: data.latest.recovered,
          isLoading: false
        })
        console.log(new Date(this.state.data.confirmed.last_updated));
        
      })
      .catch(console.log)
    }
    // const [center, setCenter] = useState({lat: -6.1878058, lng: 106.8223295 });
    // const [zoom, setZoom] = useState(11);
    // const [location, setLocation] = useState('');
    // const [locationId, setLocationId] = useState(0);
    // const fetchUsers = async () => {
    //   const response = await axios.get("https://coronavirus-tracker-api.herokuapp.com/confirmed");
    //   setLocation(response.data);
    // };
    // useEffect( () => { fetchUsers(); }, [0]);

    // console.log(location.locations.length);
    
    render() {
      var center = this.state.center;
      var zoom = this.state.zoom;
      // var data = this.state.data;
      var locations = this.state.locations;
      const {isLoading} = this.state
    
      function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
      }
    return (
      <div style={{ height: '100vh', width: '100%' }}>
       {isLoading ? <div style={{backgroundColor: 'rgba(20, 21, 20, 0.73)', zIndex: '9999'}} className="absolute h-full w-full">
         <div className="absolute loader"></div>
       </div> : <div></div>}
       <Aside data={locations} deaths={this.state.data.deaths}></Aside>
          <Summary confirmed={this.state.confirmed} deaths={this.state.deaths} recovered={this.state.recovered}></Summary>
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAZeOqwDYKcMCk65yGVtd60xjE3VfdlI-A' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
 
        {locations.map((location, index) => {
          const latitude = location.coordinates.lat; 
          const longitude = location.coordinates.long;
          const latest = location.latest;
          const province = location.province;
          const country = location.country;

          if (latest !== 0) {
            return (
              <Marker
              lat={latitude}
              lng={longitude}
              province={province}
              country={country}
              color="blue"
              latest={kFormatter(latest)}
            />
            )
          }
        })}
          {/* <Marker
            lat={-6.187504}
            lng={106.8269084}
            name="My Marker"
            color="blue"
          /> */}
        </GoogleMapReact>
      </div>
    );
}
}

export default App;