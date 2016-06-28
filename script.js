var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
     $routeProvider
         .when('/',{
             templateUrl: 'course.html',
             controller: 'courseCtrl'
         })
         .when('/course',{
             templateUrl: 'course.html',
             controller: 'courseCtrl'
         })
         .when('/converter',{
             templateUrl: 'converter.html',
             controller: 'converterCtrl'
         });
});

app.controller('courseCtrl',function (course,$scope) {
    course.courses().success(function (response) {
        $scope.courses = response;
    })
});

app.controller('converterCtrl',function (course,$scope) {
    course.courses().success(function (response) {
        $scope.courses = response;
    })
});

app.factory('course',['$http',function ($http) {
    return {
        courses: function () {
            return $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4');
        },
        names: $http.get('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4')
    }
}]);