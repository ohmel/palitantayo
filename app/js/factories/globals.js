/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
ptApp.factory('Globals', function($location) {
    //root folder Url
    var host = $location.host()+"/";
    var rootUrl;
    if(host === 'localhost/'){
        host = $location.host()+"/palitantayo/"
    }else{
        //take this off when applying to production
        host = $location.host()+"/palitantayo/"
    }
    rootUrl = 'http://'+host;
  return {
      rootUrl : rootUrl
  };
});

