//importa el api para modificacion de paginas
var pageMod = require("sdk/page-mod");
//importar el api self  
var self = require ("sdk/self");

pageMod.PageMod({
    include: "*.cce.utadeo.edu.co",
	contentScriptFile: [self.data.url("jquery-1.10.2.min.js"),
	                    self.data.url("occupyart.js")],
	onAttach: function(worker){
				worker.port.emit("replacePage", "Page Matches ruleset");
				}});