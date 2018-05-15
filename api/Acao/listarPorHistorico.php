<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
    
        if(!empty($_POST['projeto_id'])){
             $projeto = $_POST['projeto_id'];
        }
    
        $dados = R::find('historico', 
        "acao_id LIKE ?",
        [$projeto], 
            ' ORDER BY id ASC ');
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>