import React from 'react';
import ReactDOM from 'react-dom';
import mymap from '../../services/map-service';
import {addCertainLayer} from '../../services/layers-service';
import LayerList from '../../components/LayerList.jsx';
import layers from '../../services/layers-service';
import Ave_Add from '../../components/colisiones/Ave_Add.jsx';

class Aves extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      themap: {}
    }
  }

  componentDidMount(){
    var mapp = mymap.createMap("chqaves_map_div","topo",-71.2905 ,-33.1009,9);
    this.setState({themap: mapp});

    addCertainLayer("gis_cartografia", 11, "",(gis_cartografia)=>{
      gis_cartografia.on("click",(event)=>{console.log(event.graphic.attributes)});
    });
    addCertainLayer("gis_rotulos", 12, "",(gis_rotulos)=>{
      gis_rotulos.on("click",(event)=>{console.log(event.graphic.attributes)});
    });

    addCertainLayer("mobile_direccionesNuevas", 12, "",(mobile_direccionesNuevas)=>{
      mobile_direccionesNuevas.on("click",(event)=>{console.log(event.graphic)});
    });

  }

  render(){
    return (
      <div className="wrapper_chqaves">

        <div className="wrapper_factibilidadLeft">
          <Ave_Add themap={this.state.themap}/>
        </div>

        <div className="wrapper_factibilidadRight">
          <LayerList show={["check_chqbasemap"]} />
          <div className="chqaves_map_div" id="chqaves_map_div"></div>
        </div>

      </div>
    );
  }
}

export default Aves;
