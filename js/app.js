var myapp = angular.module('todoApplication',['ngMaterial','ngMessages']);

myapp.controller('mainController',["$scope","$filter","$http", function($scope,$filter,$http) {
  console.log("initiated");

$scope.type= "PendingTask";
$scope.taskStatus = 'false';
$scope.taskTitle = '';
  $scope.AddTask = function(){
    if($scope.taskTitle != '' && $scope.myDate != ''){
      console.log("taskTitle is:"+$scope.taskTitle,$scope.myDate);
     $scope.task('add');
     $http.post("select.php")
     .success(function(data){
       $scope.allTasks = data;
     });
     }
  };

  $http.post("select.php")
  .success(function(data){
    $scope.allTasks = data;
    console.log($scope.allTasks);
  });

  $http.post("selectCompleted.php")
  .success(function(data){
    $scope.completedTask = data;
    console.log($scope.completedTask);
  });


  $scope.task = function(action){
    switch(action) {
      case 'add' : $http.post("insert.php",{
                      'taskTitle' : $scope.taskTitle,
                      'taskDate' : $scope.myDate,
                      'taskDesc' : $scope.taskDesc,
                      'taskStatus' : $scope.taskStatus
                    }).success(function(data,status,headers,config){
                      console.log("Success Insertion");
                      $scope.allTasks = data;
                    });
                    $scope.taskTitle = '';
                    break;

      }

  }


$scope.taskCompleted = function(title){
  console.log(title);
  $scope.updatingTask = title;
  $http.post("update.php", {
    'taskTitle' : $scope.updatingTask
  }).success(function(data){
    $scope.allTasks = data;
  });
}


$scope.removeTask = function(title){
  $scope.removingTask = title;
  $http.post("delete.php", {
    'taskTitle' : $scope.removingTask
  }).success(function(data){
    $scope.allTasks = data;
  });
}
}]);


/**
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be foundin the LICENSE file at http://material.angularjs.org/HEAD/license.
**/