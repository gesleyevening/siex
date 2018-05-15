function ProjetosController($scope, $http,
    UsuarioService, ConceitoExtensaoService, SituacaoService,
    TipoAcaoService, CursoService, AcaoService) {
    $scope.pesquisa = {};

    $scope.sair = function() {
        UsuarioService.sair();
    }
    $scope.user = {};

    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
    });

    $scope.pesquisar = function() {
        AcaoService.pesquisar(function(acao) {
            $scope.acao = acao;
        }, $scope.pesquisa)
    }
    $scope.meusProjetos = function() {
        AcaoService.pesquisarMeusProjetos(function(acao) {
            $scope.acao = acao;
        }, $scope.pesquisa, $scope.user.idc_tipo_usuario);
    }

    $scope.init = function() {
        UsuarioService.getUser(function(usuario) {
            $scope.user = usuario;
        });
        $scope.meusProjetos();
    }

    ConceitoExtensaoService.listarArea(function(areasTematicas) {
        $scope.areasTematicas = areasTematicas;
    });

    ConceitoExtensaoService.listarObjetivo(function(objetivosOnu) {
        $scope.objetivosOnu = objetivosOnu;
    });

    ConceitoExtensaoService.listarDesafios(function(desafiosBh2030) {
        $scope.desafiosBh2030 = desafiosBh2030;
    });
    SituacaoService.listarTodos(function(situacoes) {
        $scope.situacoes = situacoes;
    });
    TipoAcaoService.listarTodos(function(tiposAcaos) {
        $scope.tiposAcaos = tiposAcaos;
    });
    CursoService.listarTodos(function(cursos) {
        $scope.cursos = cursos;
    });
}