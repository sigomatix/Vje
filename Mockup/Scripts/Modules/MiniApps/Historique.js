define(["jquery","knockout"], function($, ko){
	return function(rootSelector){
		var model;

		var Node = function(name,url, nodes){
			var self = this;
			this.name = name;
			this.url = url;
			this.nodes = nodes;

			this.onNodeClicked = function(){
				$.get("Historique/"+url).success(function(data){
					model.article(data);
				});
				return false;
			}
		}

		var aboutChurch = {
			sections : [
				{name:"Histoire"},
				{name:"Comment se rendre à l'église"},
				{name:"Contact et questions"},
				{name:"Horaire des services"}
			],
			nodes : [
				new Node(
					"I. HISTORIQUE",
					"Historique.html",
					[
						new Node("A. Les premiers serviteurs de l'église", "Les premiers serviteurs de l’Eglise.html"),
						new Node("B. Le parcours de l'évangélisation","Le parcours de l’évangélisation.html")
					]
				),
				new Node(
					"II. ORGANISATION DE LA VERITABLE-JESUS-EGLISE",
					"ORGANISATION DE LA VERITABLE-JÉSUS-EGLISE.html",
					[
						new Node("A. Organisation locale", "Organisation locale.html"),
						new Node("B. Liens entre les églises", "Liens entre les églises.html"),
						new Node("B. Direction de l'église", "Direction de l’Eglise.html")
					]
				),
			]
		};

		var Model = function(){
			var self = this;
			this.sections = ko.observableArray(aboutChurch.sections);
			this.nodes = ko.observableArray(aboutChurch.nodes);
			this.article = ko.observable("");

			$.get("Historique/Historique.html").success(function(data){
				self.article(data);
			});

		};

		model = new Model();

		$.get("Scripts/Modules/MiniApps/Historique.ko.html").success(function(data){
			$(rootSelector).html(data);
			ko.applyBindings(model, $(rootSelector)[0]);
		});
	}
})