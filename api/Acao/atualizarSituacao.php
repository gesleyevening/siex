<?php

    function validarDadosAcao() {
        if(empty($_POST['id']))
            respostaJsonErro('Ação não informada.');
        
        if(empty($_POST['situacao']))
            respostaJsonErro('Situação não informada.');
    }

    try {
        require_once '../Utils/Init.php';
        
        $_POST = json_decode(file_get_contents('php://input'), true);
        validarDadosAcao();
        $acao = R::dispense('acao');
        if(isset($_POST['id'])){
            $acao->id=$_POST['id'];
        }
        
        $acao->situacao = R::findone('situacao', 'id = ?', [$_POST['situacao']]); 
        
        R::begin();
        $id = R::store($acao);
        
        R::commit();
        respostaJsonSucesso('Situação editada com sucesso!');
    } catch(Exception $e) {
        R::rollback();
        respostaJsonErro($e->getMessage());
    }
?>