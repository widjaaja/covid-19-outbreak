import React, {Component} from 'react';
import './aside.css';
import doubleArrow from './double-arrow.svg';

class Aside extends Component {
    constructor(props) {
        super(props);
        //setting state
        this.state = {
          side: true,
        }
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        this.setState({side: !this.state.side})
        console.log(this.props);
        
      }
    render() {
        var datas = this.props.data;
        var deaths = this.props.deaths
        console.log(deaths);
        
        return <div>
            { this.state.side ? <div className="asideContainer " onClick={() => this.handleClick()}>
                <img className="arrow" style={{width: '15px'}} src={doubleArrow}></img>
            </div> :  <div className="asideContainerTrue slideRight" onClick={() => this.handleClick()}>
                <div className="contentTrue rounded-lg px-2" onClick={() => this.handleClick()}>
                    <div style={{height: '16%'}}>
                        <div className="text-gray-700 text-center text-lg tracking-wider font-medium px-4 py-2 my-3">Coronavirus disease (COVID-19) OutBreak</div>
                        {/* <div style={{width: '90%'}} class="text-center text-xs bg-gray-200 text-gray-700 inline-flex rounded p-2 mx-2">
                      <img src={searchIcon} class="mr-2 ml-1 w-4" alt="" />   
                      <input class="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none" type="text" placeholder="Search By Email ..." />
                    </div> */}
                        <div className="flex flex-row border-b border-gray-400 py-2 mr-4">
                            <div className="w-1/3 text-gray-700 text-center tracking-wide font-medium mx-2">Places</div>
                            <div className="w-1/3 text-gray-700 text-center tracking-wide font-medium mx-2">Confirmed Cases</div>
                            <div className="w-1/3 text-gray-700 text-center tracking-wide font-medium mx-2">Death Cases</div>
                        </div>
                    </div>
                    <div style={{height: '75%'}} className="flex flex-col overflow-auto py-4">
                        {datas.map((data, i) => {
                            return(
                            <div className="flex flex-row">
                                <div className="w-1/3 text-gray-700 text-center tracking-wide m-2">{data.country}</div>
                            <div className="w-1/3 text-gray-700 text-center tracking-wide m-2">{data.latest}</div>
                                <div className="w-1/3 text-gray-700 text-center m-2">{deaths.locations[i].latest}</div>
                            </div>
                            )
                        })}
                    </div>
                    <div style={{height: '9%'}}>
                    <div className="text-gray-700 text-center text-sm font-medium py-2">Made with  by Adjie</div>
                    </div>
                </div>
                <div className="arrowTrue">
                    <img className="arrowBack" style={{width: '15px'}} src={doubleArrow}></img>
                </div>
            </div>
                
            } 

            {/* <div className="asideContainer" onClick={() => this.handleClick()}>
                <img className="arrow" style={{width: '15px'}} src={doubleArrow}></img>
            </div> */}

        </div>
     }
}

export default Aside;