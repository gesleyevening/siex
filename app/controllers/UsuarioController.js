function UsuarioController($scope, $timeout, UsuarioService) {

    $scope.listaTipo = [{ "descricao": "Professor", "id": 1 }, { "descricao": "Coordenador", "id": 2 },
        { "descricao": "Membro Extensao", "id": 3 }
    ];
    $scope.usuarios = [];
    $scope.usuario = {};
    $scope.user = {};
    $scope.sair = function() {
        UsuarioService.sair();
        $scope.user = undefined;
    }

    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
    });
    $scope.logar = function() {
        UsuarioService.logar(function(user) {
            $scope.user = user[0];
        }, $scope.login);
    };

    $scope.cadastrar = function() {
        UsuarioService.cadastrar(function() {}, $scope.usuario);
        $scope.initUsuario();
    };
    
    $scope.pesquisar = function() {
        UsuarioService.pesquisarUsuario(function(usuarios) {
            $scope.usuarios = usuarios;
        }, $scope.usuario);
    };

    $scope.initUsuario = function() {
        UsuarioService.listarUsuarios(function(usuarios) {
            $scope.usuarios = usuarios;
        });
    }
    $scope.verUsuario = function(nome, email) {
        $scope.usuario.tipo = tipo;
        $scope.usuario.email = email;
        $scope.usuario.nome = nome;
    }

}
