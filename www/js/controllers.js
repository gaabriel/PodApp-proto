angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('SubsCtrl', function($scope, $state) {
  $scope.subscriptions = [
    { id: "01", pName: "Sacadas de Empreendedor", pAuthor: "Erico Rocha", pThumb: "st1" },
    { id: "02", pName: "Código Aberto", pAuthor: "B9", pThumb: "st2" },
    { id: "03", pName: "MAROMBA CAST", pAuthor: "MAROMBA CAST", pThumb: "st3" },
    { id: "04", pName: "Despachados", pAuthor: "Mind7 Digital", pThumb: "st4" },
    { id: "05", pName: "ResumoCast - Livros para Empreendedores", pAuthor: "João Cristofolini e Gustavo Carriconde", pThumb: "st5" },
    { id: "06", pName: "Podcast Tabelinha", pAuthor: "UOL", pThumb: "st6" },
    { id: "07", pName: "O Melhor Podcast do Brasil", pAuthor: "Izzy Nobre", pThumb: "st7" },
    { id: "08", pName: "Loop Matinal", pAuthor: "Loop Infinito", pThumb: "st8" },
    { id: "09", pName: "Mídia, Não Marketing", pAuthor: "Daniel Z. Chohfi", pThumb: "st9" },
    { id: "10", pName: "Chocolate Expresso", pAuthor: "Fabio Geracao", pThumb: "st10" },
    { id: "11", pName: "Fw:Thinking", pAuthor: "Fw:Thinking", pThumb: "st11" },
    { id: "12", pName: "Dev na Estrada", pAuthor: "Dev na Estrada", pThumb: "st12" },
    { id: "13", pName: "Lidercast", pAuthor: "Luciano Pires", pThumb: "st13" }
  ];
  $scope.nomefiltro = $state.params.someId;
  // console.log($state.params);
})
;










