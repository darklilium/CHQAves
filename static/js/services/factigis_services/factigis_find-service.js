import layers from '../../services/layers-service';
import token from '../../services/token-service';

function crearRectangulo(geometry,delta){
  var rectangulo = new esri.geometry.Polygon(new esri.SpatialReference(geometry.spatialReference));
    rectangulo.addRing([ [geometry.x-1,geometry.y-1],[geometry.x-1,geometry.y+1],[geometry.x+1,geometry.y+1],[geometry.x+1,geometry.y-1],[geometry.x-1,geometry.y-1] ])

		return rectangulo;
}

function factigis_findDireccion(geometry,callback){

  var myRectangulo = crearRectangulo(geometry,1);
  var qTaskInterruptions = new esri.tasks.QueryTask(layers.read_direcciones());
  var qInterruptions = new esri.tasks.Query();

  qInterruptions.returnGeometry = true;
  qInterruptions.outFields=["id_direccion","nombre_calle","numero"];
  qInterruptions.geometry = myRectangulo;
  qInterruptions.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;

  qTaskInterruptions.execute(qInterruptions, (featureSet)=>{
    console.log(featureSet.features.length);
    if(!featureSet.features.length){
      return callback([]);
    }
    callback(featureSet.features);
  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for direccion");
    callback([]);
  });
}

function factigis_findRotulo(geometry,callback){

  var myRectangulo = crearRectangulo(geometry,1);
  var qTaskInterruptions = new esri.tasks.QueryTask(layers.read_rotulos2());
  var qInterruptions = new esri.tasks.Query();

  qInterruptions.returnGeometry = true;
  qInterruptions.outFields=["*"];
  qInterruptions.geometry = myRectangulo;
  qInterruptions.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;

  qTaskInterruptions.execute(qInterruptions, (featureSet)=>{
    if(!featureSet.features.length){
      return callback([]);
    }
    callback(featureSet.features);
  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for rotulos");
    callback([]);
  });
}

function factigis_findCalle(geometry,callback){

  var myRectangulo = crearRectangulo(geometry,10);
  var qTaskInterruptions = new esri.tasks.QueryTask(layers.read_calles());
  var qInterruptions = new esri.tasks.Query();

  qInterruptions.returnGeometry = true;
  qInterruptions.outFields=["OBJECTID","nombre"];
  qInterruptions.geometry = myRectangulo;
  qInterruptions.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;

  qTaskInterruptions.execute(qInterruptions, (featureSet)=>{
    if(!featureSet.features.length){
      return callback([]);
    }
    callback(featureSet.features);
  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for direccion");
    callback([]);
  });
}

function factigis_findNewDireccion(geometry, callback){
  var myRectangulo = crearRectangulo(geometry,1);
  var qTaskInterruptions = new esri.tasks.QueryTask(layers.read_direccionesNuevasQuery());
  var qInterruptions = new esri.tasks.Query();

  qInterruptions.returnGeometry = true;
  qInterruptions.outFields=["*"];
  qInterruptions.geometry = myRectangulo;
  qInterruptions.spatialRelationship = esri.tasks.Query.SPATIAL_REL_INTERSECTS;

  qTaskInterruptions.execute(qInterruptions, (featureSet)=>{
    console.log("EN NEW",featureSet.features.length);
    if(!featureSet.features.length){
      return callback([]);
    }
    callback(featureSet.features);
  }, (Errorq)=>{
    console.log(Errorq,"Error doing query for new direccion");
    callback([]);
  });

}
export {factigis_findDireccion, factigis_findRotulo,factigis_findCalle, factigis_findNewDireccion};
