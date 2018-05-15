<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        
        if(empty($_GET['id']))
            respostaJsonErro('Identificador da situação não informado.');
        
        $dados = R::findOne('situacao', 'id = :id', [':id' => $_GET['id']]);
        if (count($dados)>0){
            respostaJson($dados);
        }
        respostaJsonErro("Situação não encontrada!");
        
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>