<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nom = htmlspecialchars($_POST["nom"]);
  $prenom = htmlspecialchars($_POST["prenom"]);
  $email = htmlspecialchars($_POST["email"]);
  $message = htmlspecialchars($_POST["message"]);

  $to = "malogueguen@gmail.com";
  $subject = "Nouveau message de $prenom $nom";
  $body = "Nom: $nom\nPrénom: $prenom\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message envoyé avec succès !";
  } else {
    echo "Échec de l'envoi.";
  }
}
?>
