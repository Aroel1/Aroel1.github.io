<?php
if (!empty($_POST['name']) AND !empty($_POST['email']) AND !empty($_POST['message'])){
$headers ='Form: кротов роман\r\n'
		  'Reply-To: zakrenconyone@gmail.com\r\n'
		  'X-Mailer: PHP' . phpversion();

$theme = 'Новое сообщение';

$letter = 'Данные сообщения:';
$letter .='Имя: '.$_POST['name'].'\r\n';
$letter .='Email: '.$_POST['email'].'\r\n';
$letter .='Сообщение: '.$_POST['message'].'\r\n';   

if (mail('zakrenconyone@gmail.com' , $theme, $letter, $headers)){
header('Location:/thankyou.php');
} else {
header('Location:/');
}
} else {
header('Location:/');
}