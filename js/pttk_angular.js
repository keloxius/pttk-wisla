var pttkApp = angular.module('pttkApp', ['ngRoute', 'ui.bootstrap', "google-maps"]);

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
      templateUrl : 'partials/imprezy/ku_zrodlom_wisly.html',
      controller  : 'imprezyKuZrodlomController'
    })
    .when('/rajd_kukuczki', {
      templateUrl : 'partials/imprezy/rajd_kukuczki.html',
      controller  : 'imprezyKukuczkiController'
    })
    .when('/przewodnik_czeka', {
      templateUrl : 'partials/imprezy/przewodnik_czeka.html',
      controller  : 'imprezyPrzewodnikController'
    })
    .when('/zameczek_prezd', {
      templateUrl : 'partials/imprezy/zameczek_prezd.html',
      controller  : 'imprezyZameczekController'
    })
    .when('/onas', {
      templateUrl : 'partials/onas.html',
      controller  : 'oNasController'
    })
    .when('/odznaki', {
      templateUrl : 'partials/odznaki.html',
      controller  : 'oNasController'
    });
});

pttkApp.controller('mainController', function($scope) {
});

pttkApp.controller('oNasController', function($scope) {
  angular.extend($scope, {
      centerProperty: {
        lat: 49.6597303,
        lng: 18.8545703
      },
      zoomProperty: 15,
      markersProperty: [ {
          latitude: 49.6597303,
          longitude: 18.8545703
        }],
      clickedLatitudeProperty: null,  
      clickedLongitudeProperty: null,
    });
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
  }
});

pttkApp.controller('imprezyController', function($scope) {
  $scope.message = 'Look! I am an imprezy page.';
});

pttkApp.controller('imprezyKuZrodlomController', function($scope) {
  $scope.message = 'Look! I am an ku_zrodlom_wisly page.';
});

pttkApp.controller('imprezyPrzewodnikController', function($scope) {
  $scope.message = 'Look! I am an ku_zrodlom_wisly page.';
});

pttkApp.controller('imprezyZameczekController', function($scope) {
  $scope.message = 'Look! I am an ku_zrodlom_wisly page.';
});

pttkApp.controller('imprezyKukuczkiController', function($scope, $filter) {
  $scope.myInterval = 3000;
  var slideImprezy = $scope.slideImprezy = [];
  var imprezy = [
    {'title': 'Zdjecie 1',
     'content': 'Tekst 1',
     'image': '../images/kukuczka/kukuczka_1.jpg'},
    {'title': 'Zdjecie 2',
     'content': 'Tekst 2',
     'image': '../images/kukuczka/kukuczka_2_maly.jpg'},
    {'title': 'Zdjecie 3',
     'content': 'Tekst 3',
     'image': '../images/kukuczka/kukuczka_3_maly.jpg'}
  ];

  for (var i=0; i<3; i++) {
    slideImprezy.push({
      title: imprezy[i].title,
      content: imprezy[i].content,
      image: imprezy[i].image
    });
  }
});