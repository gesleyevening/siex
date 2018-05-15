 function UtilService() {
    var alertaErro = function(msg, r) {
        if (r) {
            var alerta = '<div class="alert alert-success" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                '<strong>Sucesso!</strong> ' + msg +
                '</div>';
        }
        else {
            var alerta = '<div class="alert alert-danger" role="alert">' +
                '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>' +
                '<strong>Erro!</strong> ' + msg +
                '</div>';
        };
        angular.element(document.getElementById('msg')).html(alerta);
        angular.element(document.getElementById('msg2')).html(alerta);
    }
    var alerta = function(msg){
        Materialize.toast(msg, 5000);
    }
    
    return {
        alertaErro: alertaErro,
        alerta: alerta
    };
    
}
