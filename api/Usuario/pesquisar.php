<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
        
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $tipo = $_POST['tipo'];
        $where = array();
        $where_dados = array();
        if(!empty($_POST['nome'])){
            $where[] = 'nome LIKE ?';
            $where_dados[] = "%$nome%";
        }
         if(!empty($_POST['email'])){
            $where[] = 'email LIKE ?';
            $where_dados[] = "%$email%";
        }
         if(!empty($_POST['tipo'])){
            $where[] = 'idc_tipo_usuario LIKE ?';
            $where_dados[] = "%$tipo%";
        }
        
        $dados = R::find('usuario', 
            implode(' and ', $where),
            $where_dados,
            ' ORDER BY nome ASC ');
        
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