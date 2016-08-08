import {getDetailsForPotencia} from '../../services/factigis_services/factigis_potenciaEmpalmes';
import token from '../../services/token-service';

function factigis_addNuevaDireccion(newAddress, newGeometry, callback){

  console.log(newAddress, newGeometry);

  let geox = newGeometry.geoUbicacionCasa.x;
  let geoy=  newGeometry.geoUbicacionCasa.y;
    const data = {
      f: 'json',
      adds: JSON.stringify([{ attributes: newAddress, geometry: {"x":geox , "y": geoy}}]),
      token: token.read()
    };

    jQuery.ajax({
      method: 'POST',
      url: "http://gisred.chilquinta.cl:5555/arcgis/rest/services/Mobile/Ingreso_externo_nuevo/FeatureServer/2/applyedits",
      dataType:'html',
      data: data
    })
    .done(d =>{

      if(d.includes("error")){
        console.log(d,"error");
        return callback(false);
      }
      if(d.includes("success")){
        console.log(d,"adds");
        return callback(true);
      }
      return  callback(false)
    })
    .fail(f=>{
      console.log(f,"no pase")
      callback(false)
    });


  ;
}

function factigis_addNuevaFactibilidad(factibilidad, callback){
  var fact = {};

  getDetailsForPotencia(factibilidad.factigisPotencia, factibilidad.factigisEmpalme, factibilidad.factigisFase,
    (potenciaDetails)=>{
    factibilidad.factigisPotencia = potenciaDetails[0].label;
    factibilidad.capacidadInterruptor = potenciaDetails[0].capacidadInterruptor;
    factibilidad.capacidadEmpalme = potenciaDetails[0].capacidadEmpalme;

    console.log("agregar lo siguiente a arcgis srv", factibilidad);


    callback('OK');
  });

}
export {factigis_addNuevaDireccion,factigis_addNuevaFactibilidad};
