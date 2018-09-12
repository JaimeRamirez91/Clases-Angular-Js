/*descargar librerias de aangular 
https://code.angularjs.org/
ejemplos:
https://docs.angularjs.org/api/ngSanitize/service/$sanitize
*/

var app = angular.module("frmApp",['ngSanitize']);

app.directive('backImg', function(){
        return function(scope, element, attrs){
               attrs.$observe('backImg', function(value){
                console.log(value);    
                element.css({
                           
                           "background": "url("+value+")",
                           "background-size": "cover",
                           "background-position": "center",
                });
                element.addClass('circular');    
               }); 
        }
     })
.controller("frmController", function($scope){
    /*declaracion */
    $scope.nombre = "";
    $scope.dui = "";
    $scope.ingresos = "";
    $scope.Cplanillera = "";
    $scope.Cahorro = "";
    $scope.empresaN = "";
    $scope.dineroC="";

    /* Mostrar frm */
    $scope.Mostrarplanilla = function(){
            $scope.planilla = true;
            $scope.ahorro =false;
    }
    $scope.Mostrarahorro = function(){
            $scope.planilla = false;
            $scope.ahorro = true;
    }
    $scope.transaccion = function(){
         $scope.datos =" ";
         $scope.datosg = "Nombre: "+ $scope.nombre +"<br>" 
         + "Dui: "+ $scope.dui +"<br>"
         +"Ingresos: "+  $scope.ingresos+
         "<br>";
         $scope.estado = "bandera";

         if($scope.Cahorro =="c"){
            $scope.datos =  $scope.datosg +"su cuenta es de ahorro, y se apertura con: "+$scope.dineroC; 
            $scope.Cahorro = "";
            clear();
          
         }
           
         if($scope.Cplanillera =="p"){
            $scope.datos =  $scope.datosg +"su cuenta es de planilla, pertenese a la empresa "+$scope.empresaN; 
            $scope.Cplanillera ="";
            $scope.planilla = false;
            $scope.ahorro =false;
            clear();
          
           
         }

         function clear(){
                $scope.nombre = "";
                $scope.dui = "";
                $scope.ingresos = "";
                $scope.Cplanillera = "";
                $scope.Cahorro = "";
                $scope.empresaN = "";
                $scope.dineroC="";
         } 
     
    }
});
