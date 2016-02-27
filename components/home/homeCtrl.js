angular.module('quizApp').controller('homeCtrl', function($scope, quizList, quizService) {
  
  $scope.quizzes = quizList;

});