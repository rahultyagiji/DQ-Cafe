"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./services/item.service");
var items_component_1 = require("./item/items.component");
var menu_service_1 = require("./services/menu.service");
var shared_module_1 = require("./modules/shared/shared.module");
var order_service_1 = require("./services/order.service");
var cafe_component_1 = require("./item/cafe.component");
var optionspop_component_1 = require("./item/optionspop.component");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var register_component_1 = require("./auth/register/register.component");
var auth_service_1 = require("./services/auth.service");
var forms_1 = require("nativescript-angular/forms");
var signin_component_1 = require("./auth/signin/signin.component");
var orderpop_component_1 = require("./ordermodal/orderpop.component");
var angular_1 = require("nativescript-checkbox/angular");
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            entryComponents: [optionspop_component_1.OptionspopComponent],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_1.AppRoutingModule,
                //NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule,
                angular_1.TNSCheckBoxModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                cafe_component_1.CafeComponent,
                optionspop_component_1.OptionspopComponent,
                register_component_1.RegisterComponent,
                signin_component_1.SigninComponent,
                orderpop_component_1.OrderpopComponent
            ],
            providers: [
                item_service_1.ItemService,
                menu_service_1.MenuService,
                order_service_1.OrderService,
                modal_dialog_1.ModalDialogService,
                auth_service_1.AuthService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msd0RBQXNEO0FBQ3RELDBEQUF3RDtBQUN4RCx3REFBb0Q7QUFDcEQsZ0VBQTREO0FBQzVELDBEQUFzRDtBQUN0RCx3REFBb0Q7QUFDcEQsb0VBQWdFO0FBQ2hFLGtFQUFxRTtBQUVyRSx5RUFBcUU7QUFDckUsd0RBQW9EO0FBQ3BELG9EQUFtRTtBQUNuRSxtRUFBK0Q7QUFDL0Qsc0VBQWtFO0FBQ2xFLHlEQUFnRTtBQXNDaEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBcENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELGVBQWUsRUFBQyxDQUFDLDBDQUFtQixDQUFDO1lBQ3JDLE9BQU8sRUFBRTtnQkFDTCx3Q0FBa0I7Z0JBQ2xCLDhCQUFnQjtnQkFDaEIsaUNBQWlDO2dCQUNqQywrQkFBdUI7Z0JBQ3ZCLDJCQUFpQjtnQkFDakIsNEJBQVk7YUFDZjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCw4QkFBYTtnQkFDYiwwQ0FBbUI7Z0JBQ25CLHNDQUFpQjtnQkFDakIsa0NBQWU7Z0JBQ2Ysc0NBQWlCO2FBQ3BCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDRCQUFZO2dCQUNaLGlDQUFrQjtnQkFDbEIsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQge01lbnVTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9tZW51LnNlcnZpY2VcIjtcbmltcG9ydCB7U2hhcmVkTW9kdWxlfSBmcm9tICcuL21vZHVsZXMvc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHtPcmRlclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL29yZGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2FmZUNvbXBvbmVudH0gZnJvbSBcIi4vaXRlbS9jYWZlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtPcHRpb25zcG9wQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtL29wdGlvbnNwb3AuY29tcG9uZW50XCI7XG5pbXBvcnQge01vZGFsRGlhbG9nU2VydmljZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5pbXBvcnQge1JlZ2lzdGVyQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge09yZGVycG9wQ29tcG9uZW50fSBmcm9tIFwiLi9vcmRlcm1vZGFsL29yZGVycG9wLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtUTlNDaGVja0JveE1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1jaGVja2JveC9hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOltPcHRpb25zcG9wQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgLy9OYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBUTlNDaGVja0JveE1vZHVsZSxcbiAgICAgICAgU2hhcmVkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgQ2FmZUNvbXBvbmVudCxcbiAgICAgICAgT3B0aW9uc3BvcENvbXBvbmVudCxcbiAgICAgICAgUmVnaXN0ZXJDb21wb25lbnQsXG4gICAgICAgIFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgT3JkZXJwb3BDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJdGVtU2VydmljZSxcbiAgICAgICAgTWVudVNlcnZpY2UsXG4gICAgICAgIE9yZGVyU2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlLFxuICAgICAgICBBdXRoU2VydmljZVxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH0iXX0=