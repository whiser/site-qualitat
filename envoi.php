<?php 

$msg = "Nom:\t$name\n";
$msg .= "E-mail:\t$email\n";
$msg .= "E-mail:\t$sujet\n";
$msg .= "Message:\t$message\n\n";

$recipient = "neroleur@gmail.com";
$subject = "Formulaire";

$mailheaders = "From: Mon site web<> \n";
$mailheaders .= "Reply-To: $CP\n\n";

mail($recipient, $subject, $msg, $mailheaders);

echo "<HTML><HEAD>";
echo "<TITLE>Formulaire envoyer!</TITLE></HEAD><BODY>";
echo "<H1 align=center>Merci, $name </H1>";
echo "<P align=center>";
echo "Votre formulaire à bien été envoyé !</P>";
echo "</BODY></HTML>";

?>