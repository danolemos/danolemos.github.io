<?php
$nome = $_POST['nome'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$destino = "seuemail@gmail.com";
$assunto = "Novo contato do site";

$corpo = "Nome: $nome\n";
$corpo .= "Email: $email\n";
$corpo .= "Mensagem: $mensagem\n";

mail($destino, $assunto, $corpo);

echo "Mensagem enviada!";
?>
