<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        $_POST = json_decode(file_get_contents('php://input'), true);
        logInfo($_POST);
        
        $termino = new DateTime('2018-12-31');
        if(!empty($_POST['termino'])){
             $termino = $_POST['termino'];
        }
        $inicio = new DateTime('NOW');
        if(!empty($_POST['termino'])){
             $inicio = $_POST['inicio'];
        }
        
        $titulo = $_POST['titulo'];
        $tipo = $_POST['tipo_acao'];
        $curso = $_POST['curso'];
        
        if(!empty($_POST['curso'])){
            $where[] = 'curso_id = ?';
            $where_dados[] = "$curso";
        }
         if(!empty($_POST['titulo'])){
            $where[] = 'titulo LIKE ?';
            $where_dados[] = "%$titulo%";
        }
         if(!empty($_POST['tipo_acao'])){
            $where[] = 'tipo_acao_id = ?';
            $where_dados[] = "$tipo";
        }
        
        $dados = R::find('acao', 
            implode(' AND ', $where),
            $where_dados,
            ' ORDER BY titulo ASC ');
        
        foreach($dados as $dado) {
            //Curso
            $curso = R::findOne('curso', 'id = ?', [$dado->curso_id]);
            unset($dado['curso_id']);
            $dado['curso'] = $curso;
            //Usuario
            $usuario = R::findOne('usuario', 'id = ?', [$dado->professor_id]);
            unset($dado['professor_id']);
            $dado['professor'] = $usuario;
            //Tipo Ação
            $tipo = R::findOne('tipo_acao', 'id = ?', [$dado->tipo_acao_id]);
            unset($dado['tipo_acao_id']);
            $dado['tipo_acao'] = $tipo;
            //Situação
            $situacao = R::findOne('situacao', 'id = ?', [$dado->situacao_id]);
            unset($dado['situacao_id']);
            $dado['situacao'] = $situacao;
        }
        
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>