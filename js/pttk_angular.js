var pttkApp = angular.module('pttkApp', ['ngRoute']);

// configure our routes
pttkApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'mainController'
        })
        .when('/imprezy', {
            templateUrl : 'partials/imprezy.html',
            controller  : 'imprezyController'
        });
});

// create the controller and inject Angular's $scope
pttkApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});

pttkApp.controller('imprezyController', function($scope) {
    $scope.message = 'Look! I am an imprezy page.';
});

pttkApp.controller('StoryListCtrl', function ($scope) {
  $scope.stories = [
    {'title': 'Rajd im. J. Kukuczki 2014',
     'text': 'W dniu 17 maja odbędzie się Rajd Górski im. Jerzego Kukuczki, organizowany głównie przez oddział PTTK Wisła pod patronatem Pani Cecylii Kukuczki i m.in. UG Istebna',
     'age': 1},
    {'title': 'Rajd ku źródłom Wisły 2014',
     'text': 'ODDZIAŁ PTTK "WISŁA" zaprasza na XI międzynarodowy rajd narciarsko-pieszy "Ku żródłom Wisły". Rajd odbędzie się 22 marca 2014r. na dwóch trasach. Serdecznie zapraszamy!',
     'age': 3},
    {'title': 'Nowy szlak turystyczny',
     'text': 'W jesieni ub. roku został na terenie Wisly wytyczony nowy szlak turystyczny autorstwa Eli Dorighi - naszej "świeżo upieczonej przewodniczki". Jest to przedmiotem jej pracy    magisterskiej. Poniżej przedstawiamy jej autorski opis szlaku i mapkę na której szlak zaznaczony jest kolorem ciemnoczerwonym. Zapraszamy wszystkich do przejscia ta trasą bo jest, naprawdę ciekawa.',
     'age': 2}
  ];
});