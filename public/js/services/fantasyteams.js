window.angular.module('ngff.services.fantasyteams', [])
  .factory('FantasyTeams', ['$resource', 
    function($resource) {
      return $resource(
        '/fantasyteams/:fantasyTeamId', 
        {
          fantasyTeamId: '@_id'
        },
        {
          update: { method: 'PUT' }
        }
      )
    }
  ]);