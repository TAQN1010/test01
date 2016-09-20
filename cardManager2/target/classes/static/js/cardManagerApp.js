/**
 * Anguler用のjsファイル
 */

(function() {
	'use strict'
	var app=angular.module('myApp', []);

	function CardService($http) {
		return{
			getList:function(){
				return $http({
					method:'GET',
					url:'api/cards'
				});
			},
			putList:function(card){
				return $http({
					method:'PUT',
					url:'api/cards/'+card.id,
					data:card
				});
			},
			delList:function(card){
				return $http({
					method:'DELETE',
					url:'api/cards/' + card.id,
					data:card
				});
			}
		}
	}
	CardService.$inject = ['$http'];
	app.factory('CardService',CardService);
	
	function CardController(CardService){
		var vm = this;
		vm.load=load;
		vm.add=add;
		vm.update=update;
		vm.del=del;
		vm.result=null;
		function load(){
			CardService.getList().success(function(data){
				console.log(data);
				vm.result=data;
			});
		}
		function update(change, card){
			card.own=change + card.own;
			CardService.putList(card).success(function(data){
				console.log(data);
			});
		}
		function del(card){
			CardService.delList(card).success(function(data){
				alert(card.name + "を削除しました");
				load();
			});
		}
		function add(){
			alert("登録します")
		}
	}
	CardController.$inject=['CardService'];
	app.controller('CardController', CardController);
})();