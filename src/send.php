<?php

  $userName = $_POST['userName'];
  $userPhone = $_POST['userPhone'];
  if (isset($_POST['userEmail'])) {
    $userEmail = $_POST['userEmail'];
  }
  if (isset($_POST['userQuestion'])) {
    $userQuestion = $_POST['userQuestion'];
  }

  // Load Composer's autoloader
  require './phpmailer/PHPMailer.php';
  require './phpmailer/SMTP.php';
  require './phpmailer/Exception.php';

  // Instantiation and passing `true` enables exceptions
  $mail = new PHPMailer\PHPMailer\PHPMailer();

  try {
      //Server settings
      $mail->SMTPDebug = 0;                      // Enable verbose debug output
      $mail->isSMTP();                                            // Send using SMTP
      $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
      $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
      $mail->Username   = 'kostiantyn.panov.1979@gmail.com';                     // SMTP username
      $mail->Password   = 'DesignRepair2020';                               // SMTP password
      $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
      $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

      //Recipients
      $mail->setFrom('kostiantyn.panov.1979@gmail.com', 'Константин');
      $mail->addAddress('ACMilan1979@gmail.com');     // Add a recipient

      // Content
      $mail->isHTML(true);                                  // Set email format to HTML
      $mail->Subject = 'Новая заявка с сайта';
      $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}";
      if (isset($userEmail)) {
        $mail->Body .= ", Его почта: ${userEmail}";
      }
      if (isset($userQuestion)) {
        $mail->Body .= ", Его вопрос ${userQuestion}";
      }

      $mail->send();
      header('Location: thanks.html');
  } catch (Exception $e) {
      echo "Письмо не отправлено. Есть ошибка: {$mail->ErrorInfo}";
  }

?>