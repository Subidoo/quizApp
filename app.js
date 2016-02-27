angular.module('quizApp', ['ui.router']);

angular.module('quizApp').config([
	'$stateProvider', 
	'$urlRouterProvider', 

	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './components/home/homeView.html',
				controller: 'homeCtrl',
				 resolve: {
        			quizList: function (quizService) {
          			return quizService.getQuizNames();
        		}
			}
		})

			.state('quiz', {
				url: '/quiz',
				templateUrl: './components/quiz/quizView.html',
				controller: 'quizCtrl'
			})

			.state('results', {
				url: '/results',
				templateUrl: './components/results/resultsView.html',
				controller: 'resultsCtrl'
			})

}]);