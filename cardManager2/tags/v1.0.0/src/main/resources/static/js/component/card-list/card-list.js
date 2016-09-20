/**
 * 
 */
(function() {
	'use strict'
	var app=angular.module('myApp');
	
	function CardController(CardService){
		var vm = this;
		//ファンクションの宣言
		vm.load=load;
		vm.add=add;
		vm.update=update;
		vm.del=del;
		vm.sort=sort;
		vm.inputName=inputName;
		vm.packList=null;	//パックリストを空に
		vm.sortId="id"; // ソート条件を「IDの昇順」に
		vm.inputId=0;	//input化するカードID
		vm.result=null;	// resultを空に
		//DBから読み取る    
		function load(){
			//読み込みに成功したなら、呼び出し先からの戻り値cardsをdataとして
			CardService.getList().success(function(data){
				console.log(data);	//コンソールに全カードリストを表示し
				vm.result=data;		//resultに代入
			});
		}
		//カードデータの更新
		function update(card){
			//読み込みに成功したなら、呼び出し先からの戻り値cardをdataとして
			CardService.putList(card).success(function(data){
				console.log(data);	//コンソールに更新内容を表示
			});
		}
		//カードデータの削除
		function del(card){
			//読み込みに成功したなら
			CardService.delList(card.id).success(function(){
				//コンソールに削除したカード名を表示
				console.log(card.id + ":" + card.name + "を削除しました");
				load();	//再読み込みしてページ内リスト更新
			});
		}
		//カードデータの新規作成
		function add(card){
			console.dir(card);	//コンソールに渡すオブジェクト内容表示
			CardService.createList(card).success(function(data){
				console.log(data);	//コンソールに作成内容を表示
				load();	//再読み込みしてページ内リスト更新
			});
		}
		
		//ソートボタンを押したときの処理
		function sort(content){
			console.log(content);	//コンソールにソート条件を表示
			vm.sortId=content;	//ソート条件を渡す
		}
		
		//カード名クリック時の処理
		function inputName(id){
			vm.inputId=id;		//input化するIDを知らせる
		}
	}
	CardController.$inject=['CardService'];
	app.controller('CardController', CardController);
})();