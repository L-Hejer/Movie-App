import React from "react";
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"



class Spinner extends React.Component {
    render() {
     return(
      <Loader className= "Spinner"
         type="Oval"
         color="lightskyblue"
         height={70}
         width={70}
      />
     );
    }
 }
 export default Spinner;