function toggleOff(mytoggleBtnName, stateBtnHandler, stateToggleBtn ){
  switch (mytoggleBtnName) {
    case 'cliente':
    console.log("apagando control cliente...");
    dojo.disconnect(stateBtnHandler);
    $('.factigis_btnSelectCliente').css('color',"black");
    break;
    case 'poste':
      console.log("apagando control poste...");
      dojo.disconnect(stateBtnHandler);
      $('.factigis_btnSelectPoste').css('color',"black");
    break;
    case 'direccion':
      console.log("apagando control direccion...");
      dojo.disconnect(stateBtnHandler);
      $('.factigis_btnSelectDireccion').css('color',"black");
    break;
    case 'calle':

    break;
    default:

  }

}


export default toggleOff;
