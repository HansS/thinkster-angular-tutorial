window.angular.module('ngff.services.fantasyteams', [])
  .factory('FantasyTeams', ['$resource', 
    function($resource) {
      return $resource(
        'fantasyteams/:fantasyTeamid', 
        {
          fantasyTeamid: '@_id'
        },
        {
          update: { method: 'PUT' }
        }
      )
    }
  ]);