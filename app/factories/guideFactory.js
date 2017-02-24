"use strict";
app.factory("GuideStorage", ($q, $http) => {                                                                 
  let getItemList = () => {

    return $q((resolve, reject) => {                                                                                              
      $http.get('../../data/guides.json')                                              
      .then((guideObject) => {                                                                                                     
        let guidesCollection = guideObject.data.guides;                                                                                     
      resolve(guidesCollection);                                                                                                             
      })                                                                                                                          
      .catch((error) => {                                                                                                         
        reject(error);                                                                                                            
      });                                                                                                                         
    });                                                                                                                           
  }; 

  return {getItemList};

});   