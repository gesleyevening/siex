<?php
    try {
        $ignorarSeguranca = true;
        $ignorarConexao = true;
        
        require_once '../Utils/Init.php';
        
        if(empty($_SESSION['usuario']))
            respostaJsonErro('Usuário não autenticado.');  
        else
            respostaJson($_SESSION['usuario'], false);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>