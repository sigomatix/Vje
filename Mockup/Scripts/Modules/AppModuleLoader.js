define(["jquery","knockout"],function($,ko){
	
	var ApplicationModule = function(description, moduleName, rootSelector){
		var self = this;
		this.Description = ko.observable(description);
		this.ModuleName = moduleName;
		this.rootSelector = rootSelector;

		this.onStartModule = function(){
			require([self.ModuleName],function(module){
				module(self.rootSelector);
			});
		}
	}

	var ApplicationModules = function(){
		this.Modules = ko.observableArray([
			new ApplicationModule("Historique", "MiniApps/Historique", "#ApplicationRoot"),			
			new ApplicationModule("Nous contacter", "MiniApps/NousContacter", "#ApplicationRoot"),
			new ApplicationModule("Se rendre à l'église", "MiniApps/SeRendreALEglise", "#ApplicationRoot")
		]);
	}

	var appModules = new ApplicationModules();
	ko.applyBindings(appModules, $("#MenuContent")[0]);

	appModules.Modules()[0].onStartModule();
})