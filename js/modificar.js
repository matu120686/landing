
    /* ######################################################
    EN ESTA SECCION DE AQUI UD. PODRA MODIFICAR LO NECESARIO 

    0.- Indicar URL del Server principal en caso de no ser desde donde
		se ejecuta encuentra publicada la landing
	*/
	var principalServer = ""
	
	/*
    1.- Codigo del Dealer, ud. debera colocar su codigo
        de Dealer en el siguiente campo dentro de las comillas
    */    
    var Dealer = "LAN";

    /*
    2.- Indique cantidad de dispositivos que puede agregar el usuario
    */
    var groupMax = 2;

    /*
    3.- Defina el Correo Electronico que le llegara a Ud.; 
        Podras reemplazar el destinatario del correo, como asi tambien
        el asunto y cuerpo previo al mensaje escrito por el usuario 
    */
    var MailTo = "altanexit@tacticosteprotege.com.ar";
    var MailSubject = "Envio desde landing";
    var MailBody = '<div>Los datos del cliente son : </div>\
        </br>\
        </br>\
        <div>Nombre:{nombre}</div>\
        <div>DNI:{dni}</div>\
        <div>Email:{email}</div>\
        <div>Pais:{pais}</div>\
        <div>Provincia:{ciudad}</div>\
        <div>Direccion:{direccion}</div>\
        <div>Empresa:{empresa}</div>\
        <div>Telefono:{telefono}</div>\
        </br>\
        </br>\
        <div>Indica los siguientes comentarios : </div>\
        <div>{comentario}</div>';
  
    /*
    4.- Defina el Correo Electronico que le llegara al Cliente Final.;
        Podra reemplazar el asunto del correo y el cuerpo del mail
    */
    var MailSubjectCustomer = "Bienvenido a NEXIT";
    var MailBodyCustomer = '\
        <div>Bienvenido : {nombre} </div>\
        <br>\
        <div>Para poder descargar la aplicacion siga los siguientes pasos :</div>\
        <br>\
        <div>ANDROID: <a href="https://play.google.com/store/apps/details?id=com.softguard.android.smartpanicsNG">https://play.google.com/store/apps/details?id=com.softguard.android.smartpanicsNG</a></div>\
        <br>\
        <div>iOS: <a href="https://itunes.apple.com/es/app/smartpanicsng/id1058553591?mt=8">https://itunes.apple.com/es/app/smartpanicsng/id1058553591?mt=8</a></div>\
        </br>\
        <div>Una vez descargada e instalada la aplicacion active la misma haciendo un click sobre este : <a href="http://softdemonitoreo.com/spapps/index.html?code=/{url}/{nombre}/{telefono}">link</a></div>\
        <br>\
        <div>Muchas gracias</div>';


    /*
    5.- Defina su codigo de seguridad Google Re-Captcha
    */
    var reCaptcha = '6Ld-RMcUAAAAAKrbqz9Dp14l5AOnaEjdqqoUt_B7'

    /*
	6.- Defina el texto correspondiente a los terminos y condiciones
	 * la carga del texto debe contemplar que cada tecla enter presionada en la variable debe anteponerse el caracter \
     * no dejar espacios posterior al caracter \
	 * Si se desea dejar un renglon en la vista del modal escribir <br><br>\
     */
	var condiciones = '\
	1.- Pronto estarán disponibbles loss nuevos terminos y condiciones.\
	</br>\
	'
	
    /*
    7.- Defina la plantilla de SmartPanics a utilizar
     */
    var plantillaSP = '_SP'

    /*
    8.- Defina si la cuenta es o no AutoMonitoreo
     */
    var automonitoreo = 'Si'

    /*
    9.- Defina la cantidad de días de prueba de la cuenta
     */
    var diasprueba = 5

    /*
    10.- Defina el tipo de cuenta
     */
    var cuentatipo = 'LAN'

  /* FIN DE LA SECCION
  /* ###################################################### */
  