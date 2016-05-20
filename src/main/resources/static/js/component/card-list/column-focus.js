/**
 * 
 */
(function() {
	'use strict'
	var app=angular.module('myApp');
	
	//input化した項目をフォーカスする
	app.directive('showFocus', function($timeout) {
	  return function(scope, element, attrs) {
	    scope.$watch(attrs.showFocus, 
	      function (newValue) { 
	        $timeout(function() {
	            newValue && element[0].focus();
	        });
	      },true);
	  };    
	});	
})();