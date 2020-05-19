$(document).ready(function(){

/* ######################################################
  ###             NO TOCAR ESTA SECCION                 ###
  ###        MODIFIQUE EN LAS LINEAS INDICADAS          ###
  ###             QUE PUEDE REEMPLAZARSE                ###
  #########################################################
  */
    $dealer = $('#dealer');
    $mailTo = $('#mailTo');
    $mailSubject = $('#mailSubject');
    $mailBody = $('#mailBody');
    $mailSubjectCustomer = $('#mailSubjectCustomer');
    $mailBodyCustomer = $('#mailBodyCustomer');
    $plantillaSP = $('#plantillaSP');
    $automonitoreo = $('#automonitoreo');
    $diasprueba = $('#diasprueba');
    $cuentatipo = $('#cuentatipo');

    $dealer.val(Dealer);
    $mailTo.val(MailTo);
    $mailSubject.val(MailSubject);
    $mailBody.html(MailBody);
    $mailSubjectCustomer.val(MailSubjectCustomer);
    $mailBodyCustomer.html(MailBodyCustomer);
    $plantillaSP.val(plantillaSP);
    $automonitoreo.val(automonitoreo);
    $diasprueba.val(diasprueba);
    $cuentatipo.val(cuentatipo);

  /* Carga del ReCaptcha */
  $('.g-recaptcha').attr('data-sitekey', reCaptcha);

  /* Configuracion del Modal */
  $('#condiciones').on('click', function(e){
      if ($('#condiciones').is(':checked')) {
          $('#closemodal').removeClass('pointerevent')
      } else {
          $('#closemodal').addClass('pointerevent')
          $('#enviar').addClass('pointerevent')
      };
  });
  $('#closemodal').on('click', function(e){
      $('.g-recaptcha').slideDown();
  });

  /* Cargo los Terminos y Condiciones */
  var $condicionestexto = $('#condicionestexto');
  $condicionestexto.html(condiciones);

  /* Carga de los combo */
  $paisCombo = $('#pais')
  const url = principalServer+'/rest/search/paises?oauth_token=8CDCD4D5-8284-48C0-B75A-4D3AAF379C87&limit=1000&sort=[{"property":o.pro_cdescripcion,"direction":ASC}]';
  // Populate dropdown with list of paises
  $.getJSON(url, function (data) {
      data.rows.forEach(function(row){
          $paisCombo.append('<option value="'+ row.Id +'">'+ row.pro_cdescripcion +'</option>');
      })
  });

  $paisCombo.on('focus', function(){
      $paisComboValue = $paisCombo.val();
      //console.log($paisComboValue);
      $ciudadCombo = $('#ciudad');
      $ciudadCombo.find('option').remove().end();
      
      if ($paisComboValue != "") {
        const url = principalServer+ '/rest/t_provincias?oauth_token=8CDCD4D5-8284-48C0-B75A-4D3AAF379C87&limit=1000&filter=[{"property":o.pro_iParentID,"value":'+$paisComboValue+'}]&sort=[{"property":o.pro_cdescripcion,"direction":ASC}]';       
      
        $.getJSON(url, function (data) {
            data.rows.forEach(function(row) {
                $ciudadCombo.append('<option value="'+ row.pro_ccodigo +'">'+ row.pro_cdescripcion +'</option>');
            })
        })
      }
  });
  
	
  $paisCombo.on('change', function(){
    $paisComboValue = $paisCombo.val();
    //console.log($paisComboValue);
    $ciudadCombo = $('#ciudad');
    $ciudadCombo.find('option').remove().end();
    
    if ($paisComboValue != "") {
        const url = principalServer+'/rest/t_provincias?oauth_token=8CDCD4D5-8284-48C0-B75A-4D3AAF379C87&limit=1000&filter=[{"property":o.pro_iParentID,"value":'+$paisComboValue+'}]&sort=[{"property":o.pro_cdescripcion,"direction":ASC}]';
      
        $.getJSON(url, function (data) {
            data.rows.forEach(function(row) {
                $ciudadCombo.append('<option value="'+ row.pro_ccodigo +'">'+ row.pro_cdescripcion +'</option>');
            })
        })
    }
	 
  });
  
  
  /* Evento de Click a los input de Correo y Telefono */
  campoemail = document.getElementById("email")
  campoemail.addEventListener("focus", function(){
      $('#email2').slideDown()
  });
  campotelefono = document.getElementById("telefono")
  campotelefono.addEventListener("focus", function(){
      $('#telefono2').slideDown()
  })
});