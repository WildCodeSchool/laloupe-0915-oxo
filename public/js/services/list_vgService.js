//LIST VIDEOS GAMES SERVICE
function list_vgService($resource) {
		return {
			/**
			 * @private
			 */
		    _apiKey : '763bf3053c5f0506cbaffd8c9ea343e8dd4834e2',

		    /**
		     * @name setAPIKey
		     * @param apiKey the GiantBomb API key necessary for api access
		     */
		    setAPIKey : function(apiKey){
		      console.log("Setting Api Key", apiKey);
		      this._apiKey = apiKey; 
		    },
		    
		    /**
		     * @name
		     * @param
		     */
		    gameDetails : function(gameId, callback){
		      $resource('http://www.giantbomb.com/:action/:id',
		        {
		          action: 'api/game',
		          id: gameId, 
		          field_list: 'name,description,id,original_release_date,platforms,api_detail_url,site_detail_url', 
		          api_key: this._apiKey, 
		          format: 'jsonp', 
		          json_callback: 'JSON_CALLBACK'
		        },
		        {
		          get: {method: 'JSONP'}
		        }).get({}, function(result){
		          callback(result);
		        });
		    },
		    
		    gameSearch : function(searchString, callback){
			    $resource('http://www.giantbomb.com/:action',
			        {
			          action: 'api/games', 
			          field_list: 'name,id,aliases,genres,image,original_release_date,releases,platforms,api_detail_url,site_detail_url', 
			          filter: 'name:' + searchString, 
			          api_key: this._apiKey, 
			          format: 'jsonp', 
			          json_callback: 'JSON_CALLBACK'
			        },
			        {
			          get: {method: 'JSONP'}
			        }).get({}, function(result){
			          callback(result);
			        });  
		    	}
        }
}