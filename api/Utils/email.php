
<?php
$to      = 'gesley123@gmail.com';
$subject = 'the subject';
$message = 'hello';
$headers = 'From: caiocvs13@gmail.com' . "\r\n" .
    'Reply-To: caiocvs13@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

echo mail($to, $subject, $message, $headers);
?>
