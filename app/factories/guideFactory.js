"use strict";
app.factory("GuideStorage", function($q, $http) {          
	let getItemList = () => {
		return $q((resolve, reject) => {                                                               
			$http.get('data/guides.json')                                              
				.then((guideObject) => {
				console.log("guideObject", guideObject);                                                                
				// 	let guidesCollection = guideObject.data.guides; 
				// 	console.log("guidesCollection", guidesCollection);
				// 	resolve(guidesCollection);                                                                 
					resolve(guideObject);                                                                
				})                                                                                     
			.catch((error) => {                                    
				reject(error);                                                                     
			});                                                                                     
		});                                                                                         
	}; 

	return {getItemList};

});   