(function() {
  'use strict';
  var app = angular.module('app');

  function MainService($http, Config){
    return{
      //localhost:8080にDBから読み取らせる
      getCardList:function(){
        return $http({
          method:'GET',
          url:Config.getUrl() + 'api/v2/cards'
        });
      },
			getPackList:function(){
				return $http({
					method:'GET',
					url:Config.getUrl() + 'api/v2/packs'
				});
			},
			getOwnList:function(){
				return $http({
					method:'GET',
					url:Config.getUrl() + 'api/v2/owns'
				});
			},
      //カードデータの新規作成
      createCardList:function(card){	//オブジェクトcardを1件引数として受け取り
  			return $http({
  				method:'POST',
  				url:Config.getUrl() + 'api/v2/cards',
  				data:card	//登録ファンクションに渡す
  			});
  		},
      createOwnList:function(own){	//オブジェクトcardを1件引数として受け取り
  			return $http({
  				method:'POST',
  				url:Config.getUrl() + 'api/v2/owns',
  				data:own	//登録ファンクションに渡す
  			});
  		},
      //カードデータの更新
      putList:function(card){	//オブジェクトcardを1件引数として受け取り
        return $http({
          method:'PUT',
          url:Config.getUrl() + 'api/v2/cards/'+card.id,	//idを指定して
          data:card	//更新ファンクションに渡す
        });
      },
      //カードデータの削除
      delList:function(id){	//削除したいｵﾌﾞｼﾞｪｸﾄのidを1件引数として受け取り
        return $http({
          method:'DELETE',
          url:Config.getUrl() + 'api/v2/cards/' + id	//idを指定する
        });
      }
    }
  }

  MainService.$inject = ['$http', 'Config'];
  app.factory('MainService', MainService);
})();
