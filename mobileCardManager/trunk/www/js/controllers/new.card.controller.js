(function(){
  'use strict'
  var app = angular.module('app');

  function NewCardController(MainService){
    var page = navi.topPage;
    var options = page.pushedOptions;
    var vm = this;
    vm.packs=options.packs;
    vm.create=create;

    console.log(options);

    //カードデータの新規作成
		function create(own){
      //コンソールに渡すオブジェクト内容表示
      console.log(own);
			MainService.createOwnList(own).success(function(data){
				console.log(data);	//コンソールに作成内容を表示
        MainService.createCardList(own)
        navi.popPage();
			});
		}
  }
  NewCardController.$inject = ["MainService"];
  app.controller('NewCardController', NewCardController);
})();
