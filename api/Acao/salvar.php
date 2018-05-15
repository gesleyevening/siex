<?php

    function validarDadosAcao() {
        if(empty($_POST['tipoAcao']))
            respostaJsonErro('Ti2po ação não informado.');
        
        if(empty($_POST['titulo']))
            respostaJsonErro('Titulo não informado.');
        
        if(empty($_POST['descricao']))
            respostaJsonErro('Descrição não informada.');
            
        if(empty($_POST['objetivo']))
            respostaJsonErro('Objetivo não informado.');
            
        if(empty($_POST['publicoAlvo']))
            respostaJsonErro('Publico-alvo não informado.');
        
        if(empty($_POST['local']))
            respostaJsonErro('Local não informado.');
            
        if(empty($_POST['dataInicio']))
            respostaJsonErro('Data de inicio não informada.');    
        
        if(empty($_POST['tipoAcao']))
            respostaJsonErro('Tipo da ação não informado.');
            
        if(empty($_POST['cursoResponsavel']))
            respostaJsonErro('Curso responsavel não informado.');
        if(empty($_POST['coordenador']))
            respostaJsonErro('Coordenador responsavel não informado.');
    }

    try {
        require_once '../Utils/Init.php';
        
        $_POST = json_decode(file_get_contents('php://input'), true);
        validarDadosAcao();
        
        $acao = R::dispense('acao');
        if(isset($_POST['id'])){
            $acao->id=$_POST['id'];
        }
        $acao->titulo = $_POST['titulo'];
        $acao->descricao = $_POST['descricao'];
        $acao->objetivo = $_POST['objetivo'];
        $acao->publico_alvo = $_POST['publicoAlvo'];
        $acao->local = $_POST['local'];
        $acao->dt_inicio = date_format(DateTime::createFromFormat('d/m/Y', $_POST['dataInicio']), 'Y-m-d');
        if(!empty($_POST['dataTermino'])){
            $acao->dt_termino = date_format(DateTime::createFromFormat('d/m/Y', $_POST['dataTermino']), 'Y-m-d');
        }
        $acao->dt_registro = new DateTime('NOW'); // Data de registro é agora
        $acao->tipo_acao = R::findone('tipo_acao', 'id = ?', [$_POST['tipoAcao']]);
        $acao->situacao = R::findone('situacao', 'id = ?', [1]); // Situação pendênte 
        $acao->curso = R::findone('curso', 'id = ?', [$_POST['cursoResponsavel']]);
        $acao->professor = R::findone('usuario', 'id = ?', [$_SESSION['usuario']->id]); 
        $acao->coordenador = R::findone('usuario', 'id = ?', [$_POST['coordenador']]); 
        if(isset($_POST['atividades'])){
            foreach(explode(",", $_POST['atividades']) as $value) {
                $atividade =  R::dispense('atividade');
                $atividade->nome = $value;
                $acao->ownAtividadeList[] = $atividade;
            }
        }
        
        if(isset($_POST['palavrasChave'])){
            foreach(explode(",", $_POST['palavrasChave']) as $value) {
                $palavra =  R::dispense('palavrachave');
                $palavra->palavra = $value;
                $acao->ownPalavrachaveList[] = $palavra;
            }
        }
        
        R::begin();
        $id = R::store($acao);
        
        if(isset($_POST['areaTematicaIntegradora'])){
            foreach($_POST['areaTematicaIntegradora'] as $key => $value) {
                $conceito =  R::findone('conceito', 'id = ?', [$key]);
                $conceito->link('conceito_acao')->acao = $acao;
                R::store($conceito);
            }
        }
        if(isset($_POST['objetivosONU'])){
            foreach($_POST['objetivosONU'] as $key => $value) {
                $conceito =  R::findone('conceito', 'id = ?', [$key]);
                $conceito->link('conceito_acao')->acao = $acao;
                R::store($conceito);
            }
        }
        if(isset($_POST['desafiosBH2030'])){
            foreach($_POST['desafiosBH2030'] as $key => $value) {
                $conceito =  R::findone('conceito', 'id = ?', [$key]);
                $conceito->link('conceito_acao')->acao = $acao;
                R::store($conceito);
            }
        }
        
        R::commit();
        respostaJsonSucesso('Ação cadastrada com sucesso!');
    } catch(Exception $e) {
        R::rollback();
        respostaJsonErro($e->getMessage());
    }
?>