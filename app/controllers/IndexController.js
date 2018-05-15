 function IndexController($scope, UsuarioService, AcaoService, TipoAcaoService) {

     UsuarioService.getUser(function(usuario) {
         $scope.user = usuario;
     });

     $scope.sair = function() {
         UsuarioService.sair();
     }

     $scope.filtrarTipo = function(pesquisa) {
         var pesquisar = { tipo_acao: pesquisa };
         AcaoService.pesquisar(function(acao) {
             $scope.acao = acao;
         }, pesquisar)
     }

     TipoAcaoService.listarTodos(function(tipoAcao) {
         $scope.tiposAcao = tipoAcao;
     });
     AcaoService.listarTodos(function(acao) {
         $scope.acao = acao;
     });
 }
 