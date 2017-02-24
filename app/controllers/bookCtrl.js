"use strict";

app.controller("bookCtrl", function($scope, GuideStorage){
	GuideStorage.getItemList()
	.then(function(guidesCollection){
		$scope.guides = guidesCollection;
	});
		function errorGuides(response) {
			    console.error("error");
	}
});