<?php

    function validarDadosUsuario() {
        if(empty($_POST['nome']))
            respostaJsonErro('Nome do usuário não informado!');
            
        if(empty($_POST['email']))
            respostaJsonErro('Email não informado!');
        
        if(empty($_POST['senha']))
            respostaJsonErro('Senha não informada!');
            
        if(empty($_POST['tipo']))
            respostaJsonErro('Tipo do usuário não informado!');
    }
    
    try {
        require_once '../Utils/Init.php';
        
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
        
        validarDadosUsuario();
        
        $acao = R::dispense('usuario');
        $acao->nome = $_POST['nome'];
        $acao->email = $_POST['email'];
        $acao->senha = SHA1($_POST['senha']);
        $acao->idc_tipo_usuario = $_POST['tipo'];
        
        R::begin();
        $id = R::store($acao);
    
        R::commit();
        respostaJsonSucesso('Usuário salvo com sucesso!');
    } catch(Exception $e) {
        R::rollback();
        respostaJsonErro($e->getMessage());
    }            
?>