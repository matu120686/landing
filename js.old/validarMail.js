  function enableEnviar(){
    $('#enviar').removeClass('pointerevent');
  }

  /* Tomo la URL para modificar la activacion de SmartPanics */
  var protocol = location.protocol;
  var hostname = location.hostname;
  var port = location.port;

  if (protocol == 'http:' & port == '') {
    port = '80';
  } 
  if (protocol == 'https:' & port == '') {
    port = '443'
  }

  var urlfinal = protocol + '//' + hostname + ':' + port;


  /* Funcion del Enviar */ 
  function checkEnviar(event) {
    var error = 0;            
    campo = $("#nombre");
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else { campo.addClass("text_ok"); nombre = campo.val(); }

    campo = $("#dni");
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else { campo.addClass("text_ok"); dni = campo.val(); }


    /* Validacion del campo Email */
    campo = $("#email");
    campo2 = $("#emailvalidator");

    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else if (campo.val().match(/[\w+\.]+@\w+\.\w+/ig)) {
        if (campo.val() == campo2.val()) {
            campo.addClass("text_ok");
            campo2.addClass("text_ok");
            $('#errormaillabel').slideUp();
            email = campo.val();
        } else {
            campo.addClass("text_error"); error++;
            campo2.addClass("text_error"); error++;
            $('#errormaillabel').slideDown();
        }                   
    } else {
        $('#errormaillabel2').slideDown();
    };

    /* Validacion del campo Telefono */
    campo = $("#telefono");
    campo2 = $("#telefonovalidator");

    if (campo.val() != '' & campo2.val() != '') {
        if (campo.val() == campo2.val()) {
            if (campo.val().length >= 6) {
                campo.addClass("text_ok");
                campo2.addClass("text_ok");
                $('#errortelefonolabel').slideUp();
                telefono = campo.val();
            } else {
                campo.addClass("text_error");
                campo2.addClass("text_error"); 
                $('#errortelefonolabel').slideDown();
				error++;
            }
        } else {
            campo.addClass("text_error");
            campo2.addClass("text_error"); 
            $('#errortelefonolabel').slideDown();
			error++;
        }
    } else {
        campo.addClass("text_error");
        campo2.addClass("text_error");
        $('#errortelefonolabel').slideDown();
		error++;
    }

    /*
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else if (campo.val() == campo2.val() & campo.length >= 6) {
        campo.addClass("text_ok");
        campo2.addClass("text_ok");
        $('#errortelefonolabel').slideUp();
        telefono = campo.val();
    } else {
        campo.addClass("text_error"); error++;
        campo2.addClass("text_error"); error++;
        $('#errortelefonolabel').slideDown();
    }; */

    campo = $("#pais");
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else { campo.addClass("text_ok"); pais = campo.val(); }

    campo = $("#ciudad");
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else { campo.addClass("text_ok"); ciudad = campo.val(); }

    campo = $("#direccion");
    if (campo.val() == '') {
        campo.addClass("text_error"); error++;
    } else { campo.addClass("text_ok"); direccion = campo.val(); }

    campo = $("#comentario");
    if (campo.val() != '') { campo.addClass("text_ok text-area"); comentario = campo.val(); }

    campo = $("#empresa");
    if (campo.val() != '') { campo.addClass("text_ok"); empresa = campo.val(); }


    /* Validacion campos ocultos */
    campo = $("#dealer")
    if (campo.val() != '') { 
        dealerInput = campo.val(); 
    } else {
        /* En caso que no haya escrito nada en la variable Dealer
        * pongo por default SG1
        */
        campo.val() = "SG1"; 
        dealerInput = campo.val();
    };

    campo = $("#mailTo");
    if (campo.val() != '') { mailToInput = campo.val(); }
    
    campo = $("#mailSubject");
    if (campo.val() != '') { mailSubjectInput = campo.val(); }
    
    campo = $("#mailBody").html();
    /*Reemplazo las variables por lo que indica el input */
    campo = campo.replace(/{nombre}/, nombre);
    campo = campo.replace(/{dni}/, dni);
    campo = campo.replace(/{email}/, email);
    campo = campo.replace(/{pais}/, $("#pais :selected").text());
    campo = campo.replace(/{ciudad}/, $("#ciudad :selected").text());
    campo = campo.replace(/{direccion}/, direccion);
    campo = campo.replace(/{empresa}/, empresa);
    campo = campo.replace(/{telefono}/, telefono);
    campo = campo.replace(/{comentario}/, comentario);
    mailBodyInput = campo;

    campoCustomer = $("#mailSubjectCustomer");
    if (campoCustomer.val() != '') { mailSubjectCustomer = campoCustomer.val(); }
    campoCustomer = $("#mailBodyCustomer").html();
    /*Reemplazo las variables por lo que indica el input */
    campoCustomer = campoCustomer.replace(/{nombre}/, nombre);
    campoCustomer = campoCustomer.replace(/{url}/, urlfinal);
    campoCustomer = campoCustomer.replace(/{nombre}/, nombre);
    campoCustomer = campoCustomer.replace(/{telefono}/, telefono);
    mailBodyCustomer = campoCustomer;

    campo = $('#plantillaSP');
    if (campo.val() != '') { plantillaSP = campo.val(); }


    if (error == 0) {
        //mando el formulario
        $.ajax({
            type: "POST",
            url: '/handler/landingKeyModulesCheck?oauth_token=8CDCD4D5-8284-48C0-B75A-4D3AAF379C87',
            //async: false,
            //dataType: "json",
            //processData: false,
            data: {
                dealer : dealerInput,
                plantillaSP : plantillaSP,
                groupMax : groupMax,

                mailTo : mailToInput,
                mailSubject : mailSubjectInput,
                mailBody : mailBodyInput,
                nombre: nombre,
                dni : dni,
                email: email, 
                pais: pais, 
                provincia: ciudad, 
                direccion : direccion,
                empresa: empresa, 
                telefono: telefono,
                comentario: comentario,

                mailBodyCustomer : mailBodyCustomer,
                mailSubjectCustomer : mailSubjectCustomer
            },            

            success: function (data) {
                //debugger;
                if (data) {
                    document.location = 'gracias.html';
                }
            }//success: function (data) {
        })
        event.preventDefault();
        $('#enviar').addClass('pointerevent');
    }
  }
