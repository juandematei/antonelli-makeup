<?php

// configure
$from = 'info@antonellimakeup.com';
$sendTo = 'juandematei@gmail.com';
$subject = 'Nuevo mensaje desde formulario de contacto web';
$fields = array('name' => 'Nombre', 'email' => 'Email', 'phone' => 'Telefono', 'reason' => 'Asunto', 'message' => 'Mensaje'); // array variable name => Text to appear in the email
$okMessage = 'Su mensaje se ha enviado correctamente.';
$errorMessage = 'Hubo un error, por favor intente nuevamente';

// let's do the sending

try
{
    $emailText = "Has recibido un nuevo mensaje desde el formulario de contacto de la web.\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value \n";
        }
    }

    $headers = array('Content-Type: text/html; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}
else {
    echo $responseArray['message'];
}
