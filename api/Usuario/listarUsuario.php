<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
    
        $dados = R::find('usuario');
        
        foreach($dados as $dado) {   
            switch($dado['idc_tipo_usuario']){
                case '3':
                    $dado['tipo'] = ["id"=>'3', "descricao"=>'Extensão'];
                    break;
                case '2':
                    $dado['tipo'] = ["id"=>'2', "descricao"=>'Coordenador'];
                    break;
                case '1':
                    $dado['tipo'] = ["id"=>'1', "descricao"=>'Professor'];
                    break;
                default:
                    break;
            }
            unset($dado['idc_tipo_usuario']);
            unset($dado['senha']);
        }
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>