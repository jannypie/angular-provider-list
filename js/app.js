var app = angular.module("providersApp", []);

app.controller("providersController", function($scope) {

  // seed data
  $scope.providers = [{
      "last_name": "Harris",
      "first_name": "Mike",
      "email_address": "mharris@updox.com",
      "specialty": "Pediatrics",
      "practice_name": "Harris Pediatrics"
    },
    {
      "last_name": "Wijoyo",
      "first_name": "Bimo",
      "email_address": "bwijoyo@updox.com",
      "specialty": "Podiatry",
      "practice_name": "Wijoyo Podiatry"
    },
    {
      "last_name": "Rose",
      "first_name": "Nate",
      "email_address": "nrose@updox.com",
      "specialty": "Surgery",
      "practice_name": "Rose Cutters"
    },
    {
      "last_name": "Carlson",
      "first_name": "Mike",
      "email_address": "mcarlson@updox.com",
      "specialty": "Orthopedics",
      "practice_name": "Carlson Orthopedics"
    },
    {
      "last_name": "Witting",
      "first_name": "Mike",
      "email_address": "mwitting@updox.com",
      "specialty": "Pediatrics",
      "practice_name": "Witting’s Well Kids Pediatrics"
    },
    {
      "last_name": "Juday",
      "first_name": "Tobin",
      "email_address": "tjuday@updox.com",
      "specialty": "General Medicine",
      "practice_name": "Juday Family Practice"
    }
  ]

  // add provider
  $scope.addProvider = function() {
    $scope.providers.push($scope.newProvider);
  }

  // remove provider
  $scope.removeProvider = function(x) {
    $scope.providers.splice(x, 1);
  }

  // default sort settings
  $scope.sortByField = 'last_name';
  $scope.sortReverse = false;

  // select sort options
  $scope.sortOptions = [{
    field: "last_name",
    title: "Name"
  }, {
    field: "email_address",
    title: "Email"
  }, {
    field: "specialty",
    title: "Specialty"
  }, {
    field: "practice_name",
    title: "Practice"
  }];

  $scope.selected = $scope.sortOptions[0];

  $scope.hasChanged = function() {
    $scope.sortByField = $scope.selected.field;
  }

});
