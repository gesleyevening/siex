var app = angular.module('myApp', ['ngRoute', 'ui.materialize']);

app.service('UtilService', UtilService);
app.service('AcaoService', AcaoService);
app.service('ConceitoExtensaoService', ConceitoExtensaoService);
app.service('CursoService', CursoService);
app.service('SituacaoService', SituacaoService);
app.service('TipoAcaoService', TipoAcaoService);
app.service('UsuarioService', UsuarioService);

app.controller('AcaoController', AcaoController);
app.controller('CadastroAcaoController', CadastroAcaoController);
app.controller('IndexController', IndexController);
app.controller('PesquisarController', PesquisarController);
app.controller('UsuarioController', UsuarioController);
app.controller('AjudaController', AjudaController);
app.controller('ContatoController', ContatoController);
app.controller('AvaliacaoExtensaoController', AvaliacaoExtensaoController);
app.controller('ProjetosController', ProjetosController);
app.controller('AvaliacaoCoordenacaoController', AvaliacaoCoordenacaoController);

app.config(RouteConfig);
app.run(function($rootScope) {
    $rootScope.typeOf = function(value) {
        return typeof value;
    };
})
/*
app.directive('selectWatcher', function($timeout) {
    return {
        link: function(scope, element, attr) {
            var last = attr.last;
            if (last === "true") {
                $timeout(function() {
                    $(element).parent().selectpicker('val', 'any');
                    $(element).parent().selectpicker('refresh');
                });
            }
        }
    };
});*/

