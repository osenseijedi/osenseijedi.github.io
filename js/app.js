//***** This is an angular app/module registering controllers based on routing.

(function(app) {
	app.config(function($routeProvider) {
	    $routeProvider
	    	.when("/:pathToMkd*", {
	    		templateUrl: "main.html",  
	    		controller: "MainController"
	    	})
	    	.otherwise({redirectTo: "/home"})  //default routing
	});

	//Configuring markedown conversion + highlighting whenever applies
	app.config(['markedProvider', function (markedProvider) {
		markedProvider.setOptions({
			gfm: true,
		    tables: true,
		    highlight: function (code, lang) {
		    	if (lang) {
		    		return hljs.highlight(lang, code, true).value;
		    	} else {
		    		return hljs.highlightAuto(code).value;
		    	}
		    }
		});
	}]);
 
}(angular.module("angularCms", ["ngRoute", 'hc.marked'])));