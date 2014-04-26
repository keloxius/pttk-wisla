var pttkApp = angular.module('pttkApp', ['ngRoute', 'ui.bootstrap']);

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
    })
    .when('/ku_zrodlom_wisly', {
      templateUrl : 'partials/ku_zrodlom_wisly.html',
      controller  : 'imprezyKuZrodlomController'
    });
});

pttkApp.controller('mainController', function($scope) {
});


pttkApp.controller('carouselController', function($scope, $filter) {
  $scope.myInterval = 3000;
  var slides = $scope.slides = [];
  var stories = [
    {'title': 'Rajd im. J. Kukuczki 2014',
     'content': 'W dniu 17 maja odbędzie się Rajd Górski im. Jerzego Kukuczki, organizowany głównie przez oddział PTTK Wisła pod patronatem Pani Cecylii Kukuczki i m.in. UG Istebna',
     'age': 1},
    {'title': 'Rajd ku źródłom Wisły 2014',
     'content': 'ODDZIAŁ PTTK "WISŁA" zaprasza na XI międzynarodowy rajd narciarsko-pieszy "Ku żródłom Wisły". Rajd odbędzie się 22 marca 2014r. na dwóch trasach. Serdecznie zapraszamy!',
     'age': 3},
    {'title': 'Nowy szlak turystyczny',
     'content': 'Serdecznie zapraszamy na nowy szlak turystyczny autorstwa Eli Dorighi na terenie Wisly wytyczony',
     'age': 2}
  ];
  
  stories = $filter('orderBy')(stories, 'age');

  for (var i=0; i<3; i++) {
    slides.push({
      title: stories[i].title,
      content: stories[i].content
    });
    console.log(slides);
  }
});

pttkApp.controller('imprezyController', function($scope) {
  $scope.message = 'Look! I am an imprezy page.';
});

pttkApp.controller('imprezyKuZrodlomController', function($scope) {
  $scope.message = 'Look! I am an ku_zrodlom_wisly page.';
});
