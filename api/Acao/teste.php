<?php 

header("Access-Control-Allow-Origin: *");
        header('Content-Type: application/json; charset=UTF-8');
echo $data=('{
    "areaTematicaIntegradora":{"1": true, "2": true, "4": true, "5": true},
    "atividades":"54536456,456456",
"coordenador":"1",
"cursoResponsavel":"1",
"cursos_envolvidos":{"10": true, "11": true, "15": true, "19": true},
"dataInicio":"10/10/2017",
"desafiosBH2030":{"25": true, "26": true},
"descricao":"Descrição de um projeto de teste",
"local":"Campos Silva Lobo",
"objetivo":"Objetivos gerais do projeto de teste",
"objetivosONU":{"8": true, "9": true},
"palavrasChave":"asdasd,453453",
"publicoAlvo":"4564645,456456",
"tipoAcao":1,
"titulo":"Projeto de testeasdasdasd"
}');
?>