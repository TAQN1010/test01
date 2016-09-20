(function() {
  'use strict';
  var app = angular.module('app');

  function MainController(MainService) {
    var vm = this;
    //ファンクション宣言
    vm.show = show;
    vm.add = add;
    vm.load = load;
    vm.cards=null; // resultを空に
		vm.packs=null;
		vm.owns=null;

    //pull hookで再読み込み
    var pullHook= document.getElementById('pull-hook');

    pullHook.addEventListener('changestate', function(event){
      var message = '';

      //スワイプの指示
      switch (event.state) {
        //初期設定
        case 'initial':
          message = 'Pull to refresh';
          break;
        //タッチ中
        case 'preaction':
          message = 'Release';
          break;
        //タッチ後
        case 'action':
          message = 'Loading...';
          load();
          break;
      }
      pullHook.innerHTML = message;
    });

    pullHook.onAction = function(done){
      setTimeout(done, 1000);
    }

    //DBから読み取る
    function load(){
      //読み込みに成功したなら、呼び出し先からの戻り値cardsをdataとして
      MainService.getCardList().success(function(data){
        console.log(data);	//コンソールに全カードリストを表示し
        vm.cards=data;		//resultに代入
      });
      MainService.getPackList().success(function(data){
        console.log(data);	//コンソールに全パックリストを表示し
				vm.packs=data;
			});
			MainService.getOwnList().success(function(data){
        console.log(data);	//コンソールに所持リストを表示し
				vm.owns=data;
			});
    }

    //新規作成画面へ
    function add(packs){
      var options={
        packs:packs
      };
      // console.log(options);
      navi.pushPage('pages/newCard.html', options);
    }

    //リストの表示
    function show(card, packs){
      var options = {
        card:card,
        packs:packs
      };
      console.log(options);
      navi.pushPage('pages/cardDetail.html', options);
    }

  }
  MainController.$inject = ['MainService'];
  app.controller('MainController', MainController);
})();
