/**
 * 
 */
(function() {
	'use strict'
	var app=angular.module('myApp');

	function CardService($http) {
		return{
			//DBから読み取る    
			getList:function(){
				return $http({
					method:'GET',
					url:'api/cards'
				});
			},
			//カードデータの更新
			putList:function(card){	//オブジェクトcardを1件引数として受け取り
				return $http({
					method:'PUT',
					url:'api/cards/'+card.id,	//idを指定して
					data:card	//更新ファンクションに渡す
				});
			},
			//カードデータの削除
			delList:function(id){	//削除したいｵﾌﾞｼﾞｪｸﾄのidを1件引数として受け取り
				return $http({
					method:'DELETE',
					url:'api/cards/' + id	//idを指定する
				});
			},
			//カードデータの新規作成
			createList:function(card){	//オブジェクトcardを1件引数として受け取り
				return $http({
					method:'POST',
					url:'api/cards',
					data:card	//登録ファンクションに渡す
				});
			}
		}
	}
	CardService.$inject = ['$http'];
	app.factory('CardService',CardService);
})();