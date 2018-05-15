function AcaoController($scope, UsuarioService, AcaoService, SituacaoService,
TipoAcaoService, $routeParams, $rootScope) {

    //$scope.$storage = $sessionStorage;
    $scope.acao = {};

    //paramsObject = {};
    //window.location.search.replace(/\?/, '').split('&').map(function(o) {
    //    paramsObject[o.split('=')[0]] = o.split('=')[1]
    //});
    
    $scope.enviarEx = function() {
        SituacaoService.buscarPorId(function(situacao){
            $scope.acao.situacao = situacao[0];
            AcaoService.atualizarSituacao(function() {}, $scope.acao);
        }, 4)
    }
    $scope.aprovar = function() {
        SituacaoService.buscarPorId(function(situacao){
            $scope.acao.situacao = situacao[0];
            AcaoService.atualizarSituacao(function() {}, $scope.acao);
        }, 5)
    }
    $scope.reprovar = function() {
        SituacaoService.buscarPorId(function(situacao){
            $scope.acao.situacao = situacao[0];
            AcaoService.atualizarSituacao(function() {}, $scope.acao);
        }, 7)
    }
    $scope.sair = function() {
        UsuarioService.sair();
    }
    $scope.user = {};

    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
    });

    $scope.sair = function() {
        UsuarioService.sair();
    }

    AcaoService.listarPorId(function(acao) {
        $scope.acao = acao[0];
    }, $routeParams.id);
    //}, paramsObject.id);        

    $scope.tab = 1;

    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };
}
