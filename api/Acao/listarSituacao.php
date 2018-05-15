<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
    
        $dados = R::find('situacao');
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>