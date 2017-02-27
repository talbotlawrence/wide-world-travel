"use strict";

app.controller("bookCtrl", function($scope, GuideStorage){
	GuideStorage.getItemList()
		.then((guides) => {
			$scope.guides = guides.data.guides;
		});
		// .then(function(guidesCollection){
		// 	$scope.guides = guidesCollection;  //study this line
		// });
	function errorGuides(response) {
		console.error("error");
	}
});
