sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], 
 function(Controller, JSONModel) {
    "use strict";
    return Controller.extend("ns.project1.controller.View1", {
    onInit: function() {
        var oModel = new JSONModel(
            {"FirstName": "Roberto",
             "LastName": "Santucho"

            });
        //Obtenemos los valores del modelo
        
                //var oFirstName = oModel.getProperty("/FirstName");
                //var oLastName = oModel.getProperty("/LastName");
        
        //Seteamos esos valores al modelo
                // this.getView().byId("Nombre").setValue(oFirstName);
                // this.getView().byId("Apellido").setValue(oLastName);
                // this.getView().byId("FullName").setValue(oFirstName + "" + oLastName );

                //se crea una instancia y se establece el modelo a la vista        
                this.getView().setModel(oModel);                     
        
            },
        
        // processFullName: function(){
        //     var oFirstName = this.getView().byId("Nombre").getValue(oFirstName);
        //     var oLastName = this.getView().byId("Apellido").getValue(oLastName);
        //     this.getView().byId("FullName").setValue(oFirstName + "" + oLastName );
        // }
    });
});