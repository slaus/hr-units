<?php
// Email Submit
// Note: filter_var() requires PHP >= 5.2.0
//print_r($_POST);
if ( isset($_POST['name']) || isset($_POST['phone']) ) {

        $to="liza@hr-units.ru"; // receiver of the email
        $subject = "--- Сообщение с сайта ---";			// subject of the email
	$message = '
	<html>
		<head>
    			<meta charset="utf-8">
			<title>Заказ с сайта</title>
		</head>
		<body>
			<h3>Имя: <span style="font-weight: normal;">' . $_POST['name'] . '</span></h3>
			<h3>Телефон: <span style="font-weight: normal;">' . $_POST['phone'] . '</span></h3>
		</body>
	</html>';

	$headers  = "Content-type: text/html; charset=utf-8 \r\n";

	// E-mail sending function
	if (mail($to, $subject, $message, $headers)) {
	   echo '<html>
		    <head>
    	        <meta http-equiv="Refresh" content="5; URL=https://hr-units.ru/" />
    	    </head>
		    <body>
	            <div align="center" style="margin-top:30%;"><h4>Спасибо, Ваше письмо было отправлено.</h4><h3>Наш менеджер свяжется с Вами в ближайшее время.</h3><h5>Через 5 секунд Вы будете перенаправлены на сайт.<h5></div>
	        </body>
	    </html>';
	} else {
	   echo '<html>
		    <head>
    	        <meta http-equiv="Refresh" content="5; URL=https://hr-units.ru/" />
    	    </head>
		    <body>
	            <div align="center" style="margin-top:30%;"><h4>Произошла ошибка при отправки сообщения.</h4><h5>Через 5 секунд Вы будете перенаправлены на сайт</h5></div>
	        </body>
	    </html>';
	}

}
?>