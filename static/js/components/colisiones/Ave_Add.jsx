import React from 'react';
import ReactDOM from 'react-dom';
import ReactTabs from 'react-tabs';
import Select from 'react-select';
import {mymap} from '../../services/map-service';
import makeSymbol from '../../utils/makeSymbol';
import layers from '../../services/layers-service';
import {layersActivated, setLayers} from '../../services/layers-service';
import Modal from 'react-modal';

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Ave_Add extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      //selected tab in the beginning
      selectedTab: 0
    }
  }

  componentWillMount(){

  }

  handleSelect(index, last){


  }

  onChange(e){




  }

  //for validations
  onBlur(e){


  }

  //Functions for each button that get the map coordinates and validate the Factibility info.
  onClickCliente(e){

  }

  onClickPoste(e){

  }

  onClickDireccion(e){

  }

  onChangeComboBox(type, val){

  }

  onOpen(){

  }

  //Function that adds a new customer but has to validate the other fields yet.
  onClickAgregarCliente(){


  }
  openModal () { this.setState({open: true}); }

  closeModal () { this.setState({open: false}); }

  render(){

    return (
      <div className="wrapper_chqavesAdd">
      <Tabs onSelect={this.handleSelect} selectedIndex={this.state.selectedTab}>
        <TabList>
          <Tab><i className="fa fa-plus"></i></Tab>

        </TabList>
        {/* Tab cliente */}
        <TabPanel>
          <h7><b>Datos para registro de incidentes:</b></h7>
          <hr className="chqaves_hr-subtitle chqaves_hr"/>
          <div className="chqaves_BigGroupbox">
            <h8>Nombre Línea:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtRut" className="chqaves-input chqavesRut" onChange={this.onChange} onBlur={this.onBlur} value={this.state.chqavesRut} title="Ingrese el nombre de la línea" type="text" placeholder="Ingrese el nombre de la línea"  />
              <button onClick={this.onClickCliente} className="chqaves-selectFromMapButton chqaves_btnSelectCliente btn btn-default" title="Ir " type="button" >
                <span><i className="fa fa-map-marker"></i></span>
              </button>
              <h8 className="chqaves__toggleBtnLabel">{this.state.toggleCliente}</h8>
            </div>
            <h8>Número de Estructura:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtNombre" onChange={this.onChange} value={this.state.chqavesNombre} onBlur={this.onBlur} className="chqaves-input chqaves_input-solo chqavesNombre" title="Escriba el nombre de la estructura" type="text" placeholder="Escriba el nombre de la estructura"  />
            </div>
            <h8>Vano:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtTelefono" className="chqaves-input chqaves_input-solo chqavesTelefono" onChange={this.onChange}  value={this.state.chqavesTelefono} onBlur={this.onBlur} title="Escriba el vano" type="text" placeholder="Escriba el vano"  />
            </div>
            <h8>Tramo:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtRut" className="chqaves-input chqavesRut" onChange={this.onChange} onBlur={this.onBlur} value={this.state.chqavesRut} title="Ingrese el tramo" type="text" placeholder="Ingrese el tramo"  />
              <button onClick={this.onClickCliente} className="chqaves-selectFromMapButton chqaves_btnSelectCliente btn btn-default" title="Ir " type="button" >
                <span><i className="fa fa-map-marker"></i></span>
              </button>
              <h8 className="chqaves__toggleBtnLabel">{this.state.toggleCliente}</h8>
            </div>
            <h8>Tipo Incidente:</h8>
            <div className="chqaves_groupbox">
              <Select id="ddlTipoEmpalme" className="chqaves_selectEmpalme chqaves_selectInput chqavesTipoEmpalme" name="ddlTipoEmpalme" options={this.state.chqaves_tipoEmpalme} onChange={this.onChangeComboBox.bind(this,"tipoEmpalme")}
              value={this.state.chqaves_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione el tipo de incidente"/>
            </div>
          </div>
          <h7><b>Datos de la Especie</b></h7>
          <hr className="chqaves_hr-subtitle chqaves_hr"/>
          <div className="chqaves_BigGroupbox">
            <h8>Nombre de la especie:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtTramo" value={this.state.chqavesTramo} onChange={this.onChange} onBlur={this.onBlur} className="chqaves-input chqaves_input-solo chqavesTramo" title="Escriba el nombre de la especie encontrada" type="text" placeholder="Escriba el nombre de la especie encontrada" />

            <h8 className="chqaves__toggleBtnLabel">{this.state.togglePoste}</h8>
            </div>
            <h8>Sexo:</h8>
            <div className="chqaves_groupbox">
                <Select id="ddlFase" className="chqaves_selectEmpalme chqaves_selectInput chqaves_tipoFase " name="ddlFase" options={this.state.chqaves_tipoFase} onChange={this.onChangeComboBox.bind(this,"tipoFase")}
                  value={this.state.chqaves_selectedValueTipoFase} simpleValue clearable={true} searchable={false} placeholder="Seleccione sexo"/>
            </div>
            <h8>Edad:</h8>
            <div className="chqaves_groupbox">
              <Select id="ddlTipoEmpalme" className="chqaves_selectEmpalme chqaves_selectInput chqavesTipoEmpalme" name="ddlTipoEmpalme" options={this.state.chqaves_tipoEmpalme} onChange={this.onChangeComboBox.bind(this,"tipoEmpalme")}
              value={this.state.chqaves_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione rango de edad"/>
            </div>
            <h8>Fecha de muerte:</h8>
            <div className="chqaves_groupbox">
              <Select id="ddlTipoEmpalme" className="chqaves_selectEmpalme chqaves_selectInput chqavesTipoEmpalme" name="ddlTipoEmpalme" options={this.state.chqaves_tipoEmpalme} onChange={this.onChangeComboBox.bind(this,"tipoEmpalme")}
              value={this.state.chqaves_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione fecha de muerte"/>
            </div>
            <h8>Estado del cadáver</h8>
            <div className="chqaves_groupbox">
              <Select id="ddlTipoEmpalme" className="chqaves_selectEmpalme chqaves_selectInput chqavesTipoEmpalme" name="ddlTipoEmpalme" options={this.state.chqaves_tipoEmpalme} onChange={this.onChangeComboBox.bind(this,"tipoEmpalme")}
              value={this.state.chqaves_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione estado del cadáver"/>
            </div>
            <h8>Tipo de daño:</h8>
            <div className="chqaves_groupbox">
              <Select id="ddlTipoEmpalme" className="chqaves_selectEmpalme chqaves_selectInput chqavesTipoEmpalme" name="ddlTipoEmpalme" options={this.state.chqaves_tipoEmpalme} onChange={this.onChangeComboBox.bind(this,"tipoEmpalme")}
              value={this.state.chqaves_selectedValueTipoEmpalme} simpleValue clearable={true} searchable={false} placeholder="Seleccione tipo de daño"/>
            </div>
            <h8>Fotografía:</h8>
            <div className="chqaves_groupbox">
              <input id="chqaves_txtDireccion" className="chqaves-input chqavesDireccion" title="Dirección" disabled={true} type="text" placeholder="Adjunte fotografía" value={this.state.chqavesDireccion} />
              <button onClick={this.onClickDireccion} className="chqaves-selectFromMapButton chqaves_btnSelectDireccion btn btn-default chqavesDireccion" title="Ir " type="button" >
                <span><i className="fa fa-paperclip"></i></span>
              </button>
              <h8 className="chqaves__toggleBtnLabel">{this.state.toggleDireccion}</h8>
            </div>
          </div>
          <hr className="chqaves_hr"/>
              <button onClick={this.onClickAgregarCliente.bind(this)}
                className="chqaves_submitButton btn btn-success" title="Agregar Factibilidad " type="button" >
                <span><i className="fa fa-plus"></i> Agregar ave</span>
              </button>
              <Modal isOpen={this.state.open} style={customStyles}>
                <h2 className="chqaves_h2">Colisionador de Aves</h2>
                <p>{this.state.problemsforAdding}</p>
                <br />
                <button className="chqaves_submitButton btn btn-info" onClick={this.closeModal.bind(this)}>Close</button>
              </Modal>
            {/*  <button disabled={this.state.addClienteStatusBtn} className="chqaves_submitButton btn btn-success" title="Ir " type="button" onClick={this.onClickAgregarCliente} >
                  <span><i className="fa fa-plus"></i> Agregar</span>
              </button>
            */}
          </TabPanel>

        </Tabs>



      </div>
    );
  }
}

export default Ave_Add;
