<?php
    try {
        $ignorarSeguranca = true;
        require_once '../Utils/Init.php';
        
        if(empty($_GET['id'])){
            respostaJsonErro('ID não informado!');
        }
        
        $id = $_GET['id'];
        
        $dados = R::findOne('acao', 'id=?', [$id]);
        
        
            //Curso
            $curso = R::findOne('curso', 'id = ?', [$dados->curso_id]);
            unset($dados['curso_id']);
            $dados['curso'] = $curso;
            //Usuario
            $usuario = R::findOne('usuario', 'id = ?', [$dados->professor_id]);
            unset($dados['professor_id']);
            $dados['professor'] = $usuario;
            //Tipo Ação
            $tipo = R::findOne('tipo_acao', 'id = ?', [$dados->tipo_acao_id]);
            unset($dados['tipo_acao_id']);
            $dados['tipo_acao'] = $tipo;
            //Situação
            $situacao = R::findOne('situacao', 'id = ?', [$dados->situacao_id]);
            unset($dados['situacao_id']);
            $dados['situacao'] = $situacao;
            
            
            $dados['areaTematica'] = [];
            $dados['objetivo_onu'] = [];
            $dados['desafio'] = [];
            //Area Tematica
            $conceito = R::find('conceito_acao', 'acao_id=?', [$dados['id']]);
            foreach($conceito as $value){
                $c= R::findOne('conceito', 'id = ?', [$value->conceito_id]);
                if($c->tipo_conceito_id==1){
                    $dados['areaTematica'][] =$c;
                }elseif($c->tipo_conceito_id==2){
                    $dados['objetivo_onu'][] = $c;
                }elseif($c->tipo_conceito_id==3){
                    $dados['desafio'][] = $c;
                }
            }
            
            //Cursos Envolvidos
            $cursos =R::find('curso_envolvido', 'acao_id=?', [$dados['id']]);
            foreach($cursos as $value){
                $value = R::findOne('curso', 'id=?', [$value['curso_id']]);
            }
            $dados['curso_envolvido'] = $cursos;
         
        respostaJson($dados);
    } catch(Exception $e) {
        respostaJsonErro($e->getMessage());
    }
?>