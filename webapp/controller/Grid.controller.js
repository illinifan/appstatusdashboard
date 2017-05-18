sap.ui.define([
	"sap/ui/core/mvc/Controller",
	 "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("AppStatusDashboard.controller.Grid", {
		onInit: function(){

	        var oModel = new JSONModel(jQuery.sap.getModulePath("AppStatusDashboard.model","/systemstatus.json"));
       
	        this.getView().setModel(oModel); 
	      

		},
		onFull: function(){
		//	alert("hello");
			screenfull.request();
			
		 var btnFull = this.getView().byId("btnFull");
		 btnFull.setVisible(false);
		 var btnFull2 = this.getView().byId("btnFull2");
		 btnFull2.setVisible(false);
		 var btnNoFull = this.getView().byId("btnNoFull");
		 btnNoFull.setVisible(true);
		 var btnNoFull2 = this.getView().byId("btnNoFull2");
		 btnNoFull2.setVisible(true);

		},
		onNoFull: function(){
		//	alert("hello");
			screenfull.exit();
			
		 var btnFull = this.getView().byId("btnFull");
		 btnFull.setVisible(true);
		 var btnFull2 = this.getView().byId("btnFull2");
		 btnFull2.setVisible(true);
		 var btnNoFull = this.getView().byId("btnNoFull");
		 btnNoFull.setVisible(false);
		 var btnNoFull2 = this.getView().byId("btnNoFull2");
		 btnNoFull2.setVisible(false);

		},
		toEvents: function() {
			var navCon = this.getView().byId("myApp");
			navCon.to(this.getView().byId("eventpage"), "flip");
			
		
			
		},
		
		toStatus: function() {
			var navCon = this.getView().byId("myApp");
			navCon.to(this.getView().byId("statuspage"), "flip");
			
		}
		
		

	});
});