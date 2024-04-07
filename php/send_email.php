<?php
require 'php/PHPMailer-6.9.1/src/Exception.php';
require 'php/PHPMailer-6.9.1/src/PHPMailer.php';
require 'php/PHPMailer-6.9.1/src/SMTP.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $service = $_POST['service'];
    $gender = $_POST['gender'];

    // Настройки SMTP

    $mail->setFrom('kintarikk@yandex.ru', 'Сергей');
    $mail->addAddress('kintarikk@yandex.ru', 'Сергей');
    $mail->Subject = 'Новый кандидат';
    $mail->Body = "Имя: $name\nТелефон: $phone\nСлужба в ВС РФ: $service\nПол: $gender";

    $mail->send();
    echo 'Сообщение успешно отправлено';
} catch (Exception $e) {
    echo 'Ошибка отправки сообщения: ' . $mail->ErrorInfo;
}
?>