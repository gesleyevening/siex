function CadastroAcaoController($scope, $window,
    UsuarioService, ConceitoExtensaoService,
    SituacaoService, CursoService,
    TipoAcaoService, UtilService, AcaoService,
    $routeParams, $rootScope) {
    $scope.acao = {};

    /* PARA FACILITAR OS TESTES */
    //$scope.acao.tipoAcao = 1;
    //$scope.acao.titulo = "Projeto de teste";
    //$scope.acao.descricao = "Descrição de um projeto de teste";
    //$scope.acao.objetivo = "Objetivos gerais do projeto de teste";
    //$scope.acao.publicoAlvo = "Professores, alunos e funcionários";
    //$scope.acao.local = "Campos Silva Lobo";
    //$scope.acao.dataInicio = new Date(2017, 11, 01);
    //$scope.acao.palavrasChave = "Projeto, Newton Paiva, Sou Newton, SI";
    //$scope.acao.atividades = "Arquitetura, Engenharia, TI";

    $scope.sair = function() {
        UsuarioService.sair();
    }
    $scope.user = {};

    if ($routeParams.id != undefined) {
        AcaoService.listarPorId(function(acao) {
            $scope.acao = acao[0];
            $scope.acao.tipoAcao = $scope.acao.tipo_acao;
            $scope.acao.cursoResponsavel = $scope.acao.curso;
            $scope.acao.coordenador = $scope.acao.coordenador;
        }, $routeParams.id);
    }
    UsuarioService.getUser(function(usuario) {
        $scope.user = usuario;
        if ($scope.user.id == 'undefined') {
            $window.location.href = '/login';
        }
    });

    $scope.cadastrar_acao = function() {
        AcaoService.cadastrar(function() {}, $scope.acao);
    }
    
    $scope.enviarCoor = function() {
        SituacaoService.buscarPorId(function(situacao){
            $scope.acao.situacao = situacao[0];
            AcaoService.atualizarSituacao(function() {}, $scope.acao);
        }, 3)
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
    UsuarioService.listarCoordenador(function(coor) {
        $scope.listaCoor = coor;
    });
    $scope.tab = 1;

    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };
    $scope.init = function() {
        $(document).ready(function() {
            $('#button-menu').sideNav({
                menuWidth: 300,
                edge: 'left',
                closeOnClick: true,
                dragable: true,
                onOpen: function(el) {},
                onClose: function(el) {}
            });
            //$('select').material_select('destroy');
            $('select').material_select();
            //$('select:not([multiple])').material_select();
            // $('ul.tabs').tabs();
            //$('ul.tabs').tabs('select_tab', 'tab_id');
            $('.datepicker').pickadate({
                selectMonths: true, // Creates a dropdown to control month
                selectYears: 15, // Creates a dropdown of 15 years to control year,
                today: 'Hoje',
                clear: 'Limpar',
                close: 'Ok',
                closeOnSelect: false // Close upon selecting a date,
            });
        });
    }
    var currentTime = new Date();
    $scope.currentTime = currentTime;
    $scope.month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    $scope.monthShort = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    $scope.weekdaysFull = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    $scope.weekdaysLetter = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    //$scope.weekdaysShort = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    $scope.disable = [false, 1, 7];
    $scope.today = 'Hoje';
    $scope.clear = 'Limpar';
    $scope.close = 'Fechar';
    var days = 15;
    $scope.minDate = (new Date($scope.currentTime.getTime() - (1000 * 60 * 60 * 24 * days))).toISOString();
    $scope.maxDate = (new Date($scope.currentTime.getTime() + (1000 * 60 * 60 * 24 * days))).toISOString();
    $scope.onStart = function() {
        console.log('onStart');
    };
    $scope.onRender = function() {
        console.log('onRender');
    };
    $scope.onOpen = function() {
        console.log('onOpen');
    };
    $scope.onClose = function() {
        console.log('onClose');
    };
    $scope.onSet = function() {
        console.log('onSet');
    };
    $scope.onStop = function() {
        console.log('onStop');
    };
}
