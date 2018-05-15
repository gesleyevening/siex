function AcaoService($http, UtilService, $window) {
    var listarTodos = function(callback, id) {
        $http.get('api/Acao/buscarTodos.php').then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };
    
    var listarPorId = function(callback, id) {
        $http.get('api/Acao/buscarPorId.php?id=' + id).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    var cadastrar = function(callback, acao) {
        console.log(acao);
        acao.publicoAlvo = acao.publicoAlvo.toString();
        acao.atividades = acao.atividades.toString();
        acao.palavrasChave = acao.palavrasChave.toString();
        $http({
            method: "POST",
            data: acao,
            url: "api/Acao/salvar.php"
        }).then(function mySucces(response) {
            if (response.data.sucesso) {
                UtilService.alerta(response.data.mensagem);
            }
            else {
                console.log(response.data.mensagem);
                UtilService.alerta(response.data.mensagem, false);
            }
        }, function myError(response) {
            console.log(response);
            UtilService.alerta("Ocorreu um erro ao tentar salvar. " + response);
        });
    }
    
    var pesquisar = function(callback, acao) {
        $http({
            method: "POST",
            data: acao,
            url: 'api/Acao/pesquisar.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    var pesquisarMeusProjetos = function(callback, acao, tipo) {
        var url = '';
        //if (tipo == 1) {
        //  url='api/Acao/listarPorExtensao.php';
        // }
        // else if  (tipo == 2) {
        //       url= 'api/Acao/listarPorCoordenador';
        //}
        //    else if (tipo == 3){
        url = 'api/Acao/listarPorProfessor.php';
        //    }
        $http({
            method: "POST",
            data: acao,
            url: url
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    var pesquisarProjetosCoordeno = function(callback, acao, tipo) {
        var url = '';
        //if (tipo == 1) {
        //    url='api/Acao/listarPorExtensao.php';
        //}
        // else if  (tipo == 2) {
        url = 'api/Acao/listarPorCoordenador.php';
        //}
        $http({
            method: "POST",
            data: acao,
            url: url
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
               UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    var pesquisarProjetosAvaliacao = function(callback, acao, tipo) {
        var url = '';
        //if (tipo == 1) {
        url = 'api/Acao/listarPorExtensao.php';
        //}
        $http({
            method: "POST",
            data: acao,
            url: url
        }).then(function(response) {
            if (response.data.sucesso) {
                callback(response.data.conteudo);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };
    
    var atualizarSituacao = function(callback, acao) {
        var enviar = {"id": acao.id, "situacao": acao.situacao.id}
        $http({
            method: "POST",
            data: enviar,
            url: 'api/Acao/atualizarSituacao.php'
        }).then(function(response) {
            if (response.data.sucesso) {
                UtilService.alerta(response.data.mensagem);
            }
            else {
                UtilService.alerta(response.data.mensagem);
            }
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    return {
        cadastrar: cadastrar,
        listarTodos: listarTodos,
        listarPorId: listarPorId,
        pesquisar: pesquisar,
        pesquisarMeusProjetos: pesquisarMeusProjetos,
        pesquisarProjetosAvaliacao: pesquisarProjetosAvaliacao,
        pesquisarProjetosCoordeno: pesquisarProjetosCoordeno,
        atualizarSituacao: atualizarSituacao
    };
}