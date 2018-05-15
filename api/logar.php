<?php
    try {
        require_once 'Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
       
        if(!isset($_POST['login'])) {
            respostaJsonErro('Login não informado.');
        }
        
        if(!isset($_POST['senha'])) {
            respostaJsonErro('Senha não informada.');
        }
        
        $login = $_POST['login'];
        $senha = $_POST['senha'];
         
       $usuario = R::find('usuario', 
            'email = ? AND senha = ?', [$login,$senha]);
        if(count($usuario)> 0){
            respostaJson($usuario);
        }
        else{
            respostaJsonErro ("Login e senha não correspondem, tente novamente!" );
        }
    
    }
      catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
    
?>