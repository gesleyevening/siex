function RouteConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/view/principal1.html",
            controller: "IndexController"
        })
        .when("/acao/:id", {
            templateUrl: "app/view/acao.html",
            controller: "AcaoController"
        })
        
        .when("/ajuda", {
            templateUrl: "app/view/ajuda_p.html",
            controller: "AjudaController"
        })
        
        .when("/cadastrar_acao", {
            templateUrl: "app/view/cadastro1.html",
            controller: "CadastroAcaoController"
        })
        .when("/editar_acao/:id", {
            templateUrl: "app/view/cadastro1.html",
            controller: "CadastroAcaoController"
        })
        
        .when("/usuario", {
            templateUrl: "app/view/usuario.html",
            controller: "UsuarioController"
        })
        
        .when("/contato", {
            templateUrl: "app/view/contato_p.html",
            controller: "ContatoController"
        })
    
        .when("/login", {
            templateUrl: "app/view/login.html",
            controller: "UsuarioController"
        })
        
        .when("/pesquisar_acao", {
            templateUrl: "app/view/pesquisa1.html",
            controller: "PesquisarController"
        })
        
        .when("/meus_projetos", {
            templateUrl: "app/view/meusprojetos.html",
            controller: "ProjetosController"
        })
        .when("/avaliar_projetos", {
            templateUrl: "app/view/projetosavaliacao.html",
            controller: "AvaliacaoExtensaoController"
        })
        .when("/coordenar_projetos", {
            templateUrl: "app/view/projetoscoordeno.html",
            controller: "AvaliacaoCoordenacaoController"
        })
        .otherwise({
            redirectTo: "/"
        });
}