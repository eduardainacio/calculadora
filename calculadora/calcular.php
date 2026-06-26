<?php

header("Content-Type: application/json");

if (!isset($_POST["expressao"])) {
    echo json_encode([
        "erro" => "Nenhuma expressão enviada."
    ]);
    exit;
}

$expressao = $_POST["expressao"];

// Permite apenas caracteres matemáticos
$expressao = preg_replace("/[^0-9+\-*\/%.()]/", "", $expressao);

// Converte porcentagem
$expressao = preg_replace('/(\d+)%/', '($1/100)', $expressao);

try{
    eval("\$resultado = $expressao;");
    echo json_encode([
        "resultado"=>$resultado
    ]);
}
catch(Throwable $e){
    echo json_encode([
        "erro"=>"Expressão inválida."
    ]);
}