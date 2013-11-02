//importa el api para modificacion de paginas
var pageMod = require("sdk/page-mod");
//importar el api self  
var self = require ("sdk/self");

pageMod.PageMod({
    include: "*.utadeo.edu.co",
    //include: "*.cce.utadeo.edu.co",
	contentScriptFile: [self.data.url("jquery-1.10.2.min.js"),
	                    self.data.url("occupyart.js"),
                        self.data.url("g2/jquery.bxslider.min.js")],
	onAttach: function(worker){
				worker.port.emit("replacePage", "Page Matches ruleset");
				}});
