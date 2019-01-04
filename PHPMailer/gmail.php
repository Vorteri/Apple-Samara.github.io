<?php

	$name = $_POST['user_name'];
	$email = $_POST['user_email'];
	$userMessage = '<img style="display: block; margin: auto;" src="cid:logo.png" alt="logo"> <h2 style="text-align: center; margin-bottom: 0px;">Здравствуйте, ' . $name . '!</h2><br><p style="font-size: 16px; text-align: center; margin-top: 0px;"> Интенсив пройдет 5 сентября в 19:00 по Москве. За 1 час перед началом, вам придет ссылка на интенсив.</p>';
	$userSub = 'Спасибо за регистрацию!';
	$adminMessage = '<h2>Успешно зарегистрирован на интенсив</h2><p style="font-size: 16px; margin: 0px;">Пользователь:  ' . $name . '</p><br><p style="font-size: 16px; margin: 0px;">Email:  ' . $email . '</p>';
	$adminSub = 'Пользователь успешно зарегистрирован!';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';
$mail->Encoding = 'base64';
$mail->isSMTP();
$mail->SMTPDebug = 0;
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->isHTML(true);
$mail->Username = "wordpresshelpme1@gmail.com";
$mail->Password = "pmXdDYV3U68R";
$mail->setFrom('wordpresshelpme1@gmail.com', 'Wordpress Интенсив');
$mail->addAddress( $email , $name);
$mail->Subject = $userSub;
$mail->AddAttachment('img/logo.png');
$mail->Body    = $userMessage;
$mail->Send();
$mail->ClearAllRecipients();
$mail->ClearAttachments();
$mail->Subject = $adminSub;
$mail->Body     = $adminMessage;
$mail->AddAddress('lumiannokia@gmail.com', 'Admin');
if (!$mail->send()) {
	echo "Error";
} else {
header('location: ../thankyou.html');
}
$mail->setLanguage('ru', 'language/phpmailer.lang-ru.php');






function save_mail($mail)
{
    $path = "{imap.gmail.com:993/imap/ssl}[Gmail]/Sent Mail";
    $imapStream = imap_open($path, $mail->Username, $mail->Password);

    $result = imap_append($imapStream, $path, $mail->getSentMIMEMessage());
    imap_close($imapStream);

    return $result;
}
