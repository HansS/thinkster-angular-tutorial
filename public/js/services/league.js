window.angular.module('ngff.services.leagues', [])
	.factory('Leagues', ['$resource',
		function($resource) {
			'leagues/:leagueId',
			{
				leagueId: '@_id'
			},
			{
				update: {method: 'PUT'}
			}
		}
	]);