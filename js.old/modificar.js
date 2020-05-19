
    /* ######################################################
    EN ESTA SECCION DE AQUI UD. PODRA MODIFICAR LO NECESARIO 

    1.- Codigo del Dealer, ud. debera colocar su codigo
        de Dealer en el siguiente campo dentro de las comillas
    */    
    var Dealer = "***";

    /*
    2.- Indique cantidad de dispositivos que puede agregar el usuario
    */
    var groupMax = 2;

    /*
    3.- Defina el Correo Electronico que le llegara a Ud.; 
        Podras reemplazar el destinatario del correo, como asi tambien
        el asunto y cuerpo previo al mensaje escrito por el usuario 
    */
    var MailTo = "implementacion@softguard.com";
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
    var MailSubjectCustomer = "Bienvenido a SmartPanics";
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
    var reCaptcha = '6Ld8fz0UAAAAADeNNN3RVPUmZIkJhCQUrps-_P6u'

    /*
    6.- Defina el texto correspondiente a los terminos y condiciones
     */
    var condiciones = '\
    TÉRMINOS Y CONDICIONES GENERALES DE ADHESION PARA CIUDADANOS</br></br>\
    La MUNICIPALIDAD DE SAN ANDRÉS DE GILES ha implementado un sistema de apoyo a la seguridad ciudadana denominado GILES ALERTA  (en adelante el SERVICIO). Este Servicio consiste en una aplicación, diseñada para operar bajo entorno Android e Ios, que permite conectar a los teléfonos celulares con el Centro de Monitoreo Municipal (en adelante C.M.M.), a los efectos de transmitir información en forma inmediata referida a cualquier situación de inseguridad como personas sospechosas, robos, asaltos, incendios u otros incidentes que afecten la integridad física y la propiedad de los ciudadanos.\
    El objetivo de este Servicio es contribuir a mejorar la seguridad de los vecinos de nuestra ciudad, incorporando un nuevo canal de comunicación que permita un vínculo rápido entre el C.M.M. y los ciudadanos mediante los mensajes de textos y/o mensajes interactivos.\
    El Servicio utiliza un nuevo canal de comunicación consistente en un sistema de recepción de mensajes a través de la red tecnológica pre-existente en manos de los ciudadanos.\
    Este sistema es de uso sencillo y permite que, ante un robo, un asalto, sospechoso o cualquier situación de emergencia, los ciudadanos usuarios puedan enviar un mensaje multimedia con posición geográfica, audio, foto/video, texto al C.M.M reportando el incidente.\
    Todos los mensajes/alertas despachadas, llegarán al C.M.M. desde donde se procederá a notificar a las autoridades relevantes, de acuerdo a la naturaleza de la emergencia, y se procederá a informar de todos los detalles del evento y su desarrollo en tiempo real y proveerá la coordinación entre las diferentes áreas intervinientes.</br></br>\
    La adhesión al Servicio GILES ALERTA se realiza mediante la conformidad del respectivo formulario de SOLICITUD DE SERVICIO que se adjunta a continuación.\
    Me notifico y declaro conocer, los términos y condiciones generales de adhesión del sistema GILES ALERTA.</br></br>\
       SOLICITUD DE SERVICIO GILES ALERTA - TERMINOS Y CONDICIONES CON CIUDADANOS\
    I. SOLICITUD DE SERVICIO</br></br>\
    La presente Solicitud de Servicio GILES ALERTA (en adelante la Solicitud de Servicio), la instalación y activación del servicio GILES ALERTA  (en adelante el Servicio) quedan supeditadas a la aceptación por parte de la Municipalidad de San Andrés de Giles (en adelante, el Municipio). El MUNICIPIO se reserva la facultad discrecional de definir el ingreso y egreso del solicitante al sistema del servicio. El ingreso o egreso del solicitante al sistema es decisión de único resorte del Municipio, no debiendo expresar causa, lo que es expresamente aceptado por el ciudadano solicitante. La aceptación del solicitante por parte del MUNICIPIO se tendrá por operada con la activación instrumentada a través de la validación del Solicitante. En caso de imposibilidades técnicas y/o cualquier otra circunstancia que impidiera la activación y/o suspensión y/o interrupción del Servicio, el MUNICIPIO no se hace responsable frente al Solicitante ni ante terceros de tal situación. \
    II. DEL SOLICITANTE</br></br>\
    El solicitante se obliga a informar en el plazo de 24 horas, cualquier cambio en el domicilio real o en el nro telefónico.\
    La aceptación de las presentes normas de adhesión por parte del solicitante estará dada por la validación que el Municipio realice al solicitante, a través del envío de un mensaje de texto y/o mail que indique que se encuentra incluido el solicitante en el sistema.</br></br>\
    III. DEL SERVICIO</br></br>\
    III.1. El Servicio objeto de la presente Solicitud consiste en adherir al sistema de apoyo a la seguridad ciudadana que permite al ciudadano enviar mensajes de texto y multimedia al C.M.M. ante emergencias. De esta manera el Solicitante podrá alertar de manera inmediata al C.M.M. ante situaciones de inseguridad,  personas sospechosas, robos, asaltos, incendios u otros incidentes que afecten o pudieran afectar la seguridad de los ciudadanos.\
    En este sentido, el Solicitante podrá enviar notificaciones respecto a eventos de emergencia acompañados de posición geográfica, fotos/videos, audio, y mensaje de texto con hasta 250 caracteres identificando: hecho, lugar y si resulta ser víctima directo del hecho que denuncia, los que serán recibidos a través de un sistema situado en el C.M.M. para que luego sean procesadas por los responsables de dicha dependencia. Recepcionada una alerta de emergencia, el MUNICIPIO procederá a enviar hasta el lugar denunciado la asistencia que le fuera requerida - siempre que la disponibilidad de unidades así se lo permitan-. Con la comunicación fehaciente de la alarma o alerta recibida, al/los móviles policiales y/o de otras dependencias públicas relevantes al domicilio denunciado y siempre que no se requiera de ulteriores medidas, se tendrá por cumplido el Servicio que dio origen a la alerta. En caso de corresponder la asistencia del servicio médico, los agentes del C.M.M. procederán a llamar al Servicio de Emergencia.\
    Tratándose de un hecho de emergencia, el solicitante se obliga a realizar un uso responsable y razonable de la herramienta.\
    III.2. La instalación del Servicio deberá ser validada por el Municipio expresando el solicitante su conformidad con esta condición.\
    III.3. El Servicio se regirá por lo establecido por los presentes TÉRMINOS Y CONDICIONES GENERALES, manifestados en la presente Solicitud de Servicio. El Municipio podrá en cualquier momento modificar las condiciones del servicio, las que serán notificadas al solicitante por vía mensaje de texto y/o mail.\
    III.4. El Solicitante reconoce y acepta que la calidad de la prestación del Servicio se encuentra sujeta a cuestiones fuera del alcance del MUNICIPIO, tales como el debido funcionamiento del sistema telefónico y/o Internet en los elementos que cuenta el solicitante que se adhiere. En caso de detectar algún tipo de falla o deficiencia en su sistema telefónico o de internet, el Solicitante se compromete a notificar en el plazo más breve posible contado en horas al teléfono de protección ciudadana y/o via mail\
    III.5. EL SOLICITANTE RECONOCE, DECLARA Y ACEPTA EXPRESAMENTE que el Servicio no constituye un sistema de seguridad, ni de prevención contra el delito; sino que el mismo es un sistema de alarma que permite conectarse con mayor celeridad y seguridad con el C.M.M. En este sentido, el solicitante comprende y declara expresamente que el MUNICIPIO no será responsable por los daños, directos o indirectos de cualquier naturaleza y por el lucro cesante emergentes de la interrupción y/o falla de comunicación del Servicio, total o parcial; así como tampoco de los efectos directos e indirectos, mediatos o inmediatos que la/s contingencia/s pudiere generar a las personas involucradas en los hechos que disparen la utilización del presente servicio.</br></br>\
    IV. DEL USO DEL SERVICIO</br></br>\
    El Solicitante reconoce y acepta la importancia de realizar un uso responsable del Servicio reservando su utilización únicamente para las ocasiones en las que el mismo sea realmente requerido y conforme las disposiciones legales, reglamentarias, los TÉRMINOS Y CONDICIONES GENERALES y la presente Solicitud, no haciéndolo de modo que puedan resultar daños al MUNICIPIO, al Servicio y/o a terceros y/o que, de alguna manera implique poner en riesgo bienes o personas, asumiendo todas las responsabilidades que de ello emanaren. La falta de cumplimiento con tal recaudo habilitará al MUNICIPIO a cancelar el Servicio, sin necesidad de notificación previa, y reclamar los daños y perjuicios que ocasionara. El incorrecto o defectuoso uso del Servicio por el Solicitante o un tercero por el que éste deba responder, habilitará al MUNICIPIO a iniciar las acciones legales que correspondan a fin de resarcir el daño que el uso irregular o indebido del Servicio pudiera haber causado.\
    El uso indebido de la herramienta por parte del solicitante podrá ser considerado como falsa denuncia.</br></br>\
    V. DEL PLAZO</br></br>\
    El MUNICIPIO proporcionará el Servicio a partir de la fecha de aceptación de la presente Solicitud de Servicio y por tiempo indeterminado hasta tanto no se produzca una rescisión del Servicio por alguna de las situaciones previstas en la presente Solicitud de Servicio o las TÉRMINOS Y CONDICIONES GENERALES o una terminación de la prestación del Servicio en general.</br></br>\
    VI. DEL COSTO DEL SERVICIO</br></br>\
    El Servicio es brindado por el MUNICIPIO en forma gratuita a todos los Solicitantes a quienes se acepte la Solicitud de Servicio y que posean la herramienta requerida. Solo generará cargos en los casos que se comprueben incumplimientos a los términos y condiciones del presente.</br></br>\
    VII. DE LAS HERRAMIENTAS DEL SERVICIO</br></br>\
    Para hacer uso del Servicio, el Solicitante utilizará la herramienta telefónica o informática que posea a su propio costo y cargo. El MUNICIPIO es tercero ajeno a la vinculación contractual y/o extracontractual que tenga o pueda tener en el futuro el Solicitante con la empresa proveedora del servicio telefónico o informático.</br></br>\
    VIII. DE LA CANCELACIÓN DEL SERVICIO</br></br>\
    VIII.1. El MUNICIPIO tendrá derecho a cancelar el Servicio en cualquier momento, sin necesidad de expresión de causa, pudiendo notificar al domicilio constituido del Solicitante, pero sin que sea requisito previo.</br></br>\
    VIII.2. El Solicitante puede cancelar el Servicio notificando por escrito tal decisión al MUNICIPIO con por lo menos treinta (30) días hábiles de anticipación.</br></br>\
    IX. DE LA INTRANSFERENCIA</br></br>\
    El Solicitante no podrá transferir ni ceder el Servicio a terceros sin previo consentimiento y autorización por escrito del MUNICIPIO, dejándose constancia que el cesionario y cedente deberán asimismo cumplir con todos los términos y procedimientos que el MUNICIPIO indique al respecto.</br></br>\
    X. DE LOS DOMICILIOS</br></br>\
    Para todos los efectos y comunicaciones derivadas de la Solicitud de Servicio y/o de la prestación del Servicio, se constituyen los siguientes domicilios donde serán válidas todas las comunicaciones:</br></br>\
    SOLICITANTE: en el domicilio arriba indicado\
    MUNICIPIO: Moreno 338, San Andrés de Giles, Provincia de Buenos Aires (6720)\
    Dichos domicilios se considerarán subsistentes hasta que se notifique fehacientemente un nuevo domicilio.</br></br>\
    XI. DE LA JURISDICCIÓN</br></br>\
    En caso de que fracase tal instancia y para todos los efectos derivados de la Solicitud de Servicio y/o de la Prestación del Servicio, las partes se someten a la Jurisdicción del Juzgado en lo Contencioso Administrativo del Departamento Judicial Mercedes, renunciando a cualquier otro fuero o jurisdicción que les corresponda o pueda corresponderle en el futuro.\
    '

	/*
    7.- Defina la plantilla de SmartPanics a utilizar
     */
    var plantillaSP = '_SP'


  /* FIN DE LA SECCION
  /* ###################################################### */
  