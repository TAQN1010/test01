(function(){
  'use strict'
  var app = angular.module('app');

  function CardDetailController(MainService){
    var page = navi.topPage;
    var options = page.pushedOptions;
    var vm = this;
    vm.own = options.own;
    vm.card = options.card;
    vm.packs = options.packs;
    vm.update = update;
    vm.reset = reset;
    vm.del = del;
    vm.showDialog=showDialog;
    vm.hideDialog=hideDialog;

    // console.log(options);

    //カードデータの更新
		function update(card){
      console.log(card);
			//読み込みに成功したなら、呼び出し先からの戻り値cardをdataとして
			MainService.putList(card).success(function(data){
				console.log(data);	//コンソールに更新内容を表示
        navi.popPage();
			});
		}

    //カード枚数を0枚にする
    function reset(card){
      card.own=0;
    }

    //カードデータの削除
		function del(card){
			//読み込みに成功したなら
			MainService.delList(card.id).success(function(){
				//コンソールに削除したカード名を表示
				console.log(card.id + ":" + card.name + "を削除しました");
        navi.popPage();
			});
		}

    function showDialog(id) {
      document
        .getElementById(id)
        .show();
    };

    function hideDialog(id){
      document
        .getElementById(id)
        .hide();
    };
  }
  CardDetailController.$inject = ['MainService'];
  app.controller('CardDetailController', CardDetailController);
})();
