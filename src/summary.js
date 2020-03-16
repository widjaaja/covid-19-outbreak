import React from 'react';
import './summary.css';
import reactLogo from './react-logo.png'
import tailwindCss from './tailwindcss-logo.svg'

const Summary = (props) => {
    const { confirmed, deaths, recovered } = props;
    function convertToAngka(angka)
    {
      var rupiah = '';		
      var angkarev = angka.toString().split('').reverse().join('');
      for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
      return rupiah.split('',rupiah.length-1).reverse().join('');
    }
    return (
      <div>
        <div style={{ right: '5%'}} className="absolute overflow-auto bg-white rounded-lg z-50 m-2 pl-2 pr-4">
          <div class="flex flex-col m-1">
          <div class="text-gray-700 text-sm uppercase tracking-wider font-medium mx-2 my-1">Coronavirus Map</div>
            <div class="text-gray-700 text-xsm tracking-wider mx-2">{convertToAngka(confirmed)} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm tracking-wider mx-2">{convertToAngka(deaths)} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm tracking-wider mx-2">{convertToAngka(recovered)} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm border-t border-gray-300 m-2">Last Updated</div>
          </div>
        </div>
        <div style={{ right: '5%', backgroundColor: 'rgba(255, 255, 255, 0.53)'}} className="absolute overflow-auto rounded-lg bottom-0 z-50 my-6 px-4">
          {/* <div class="flex flex-col m-1">
            <div class="text-gray-700 text-sm uppercase font-medium mx-2 my-1">Created with :</div>
            <div class="text-gray-700 text-xsm mx-2">{confirmed} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm mx-2">{deaths} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm mx-2">{recovered} Confirmed Cases</div>
            <div class="text-gray-700 text-xsm border-t border-gray-300 m-2">Last Updated</div>
          </div> */}
          <div class="flex flex-row">
            <div class="text-gray-700 text-sm text-center font-medium my-auto">Made with :</div>
            <div class="text-gray-700 text-center py-2 my-auto">
              <img src={reactLogo} style={{width: '80px'}} class="ml-2 " alt="" />  
            </div>
            <div class="text-gray-700 text-center py-2 my-auto">
              <img src={tailwindCss} style={{width: '120px'}} class="ml-2 " alt="" />  
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Summary;