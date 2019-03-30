"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var main_component_1 = require("./main/main.component");
var schedule_component_1 = require("./main/schedule/schedule.component");
var grades_component_1 = require("./main/grades/grades.component");
var canteen_component_1 = require("./main/canteen/canteen.component");
var default_component_1 = require("./main/default/default.component");
var settings_component_1 = require("./settings/settings.component");
var authGuard_service_1 = require("~/app/services/auth/authGuard.service");
var signin_component_1 = require("./signin/signin.component");
var routes = [
    { path: "", redirectTo: "/main", pathMatch: "full" },
    { path: "main", component: main_component_1.MainComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: "schedule", component: schedule_component_1.ScheduleComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: "grades", component: grades_component_1.GradesComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: "item-a/:id", component: canteen_component_1.ItemDetailComponentA },
    { path: "item-b/:id", component: canteen_component_1.ItemDetailComponentB },
    { path: "default", component: default_component_1.DefaultComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: "settings", component: settings_component_1.SettingsComponent, canActivate: [authGuard_service_1.AuthGuard] },
    { path: "login", component: signin_component_1.SigninComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSx3REFBc0Q7QUFDdEQseUVBQXVFO0FBQ3ZFLG1FQUFpRTtBQUNqRSxzRUFBOEY7QUFDOUYsc0VBQW9FO0FBQ3BFLG9FQUFrRTtBQUNsRSwyRUFBa0U7QUFDbEUsOERBQTREO0FBRzVELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBRTtJQUNwRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUUsV0FBVyxFQUFFLENBQUMsNkJBQVMsQ0FBQyxFQUFFO0lBQ3hFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsd0NBQW9CLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx3Q0FBb0IsRUFBRTtJQUN2RCxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBRTtJQUMxRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFLFdBQVcsRUFBRSxDQUFDLDZCQUFTLENBQUMsRUFBRTtJQUM1RSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7Q0FDaEQsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFDLG1CQUFtQixFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDcEYsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tIFwiLi9tYWluL21haW4uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTY2hlZHVsZUNvbXBvbmVudCB9IGZyb20gXCIuL21haW4vc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcmFkZXNDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluL2dyYWRlcy9ncmFkZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50QSwgSXRlbURldGFpbENvbXBvbmVudEIgfSBmcm9tIFwiLi9tYWluL2NhbnRlZW4vY2FudGVlbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IERlZmF1bHRDb21wb25lbnQgfSBmcm9tIFwiLi9tYWluL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNldHRpbmdzQ29tcG9uZW50IH0gZnJvbSBcIi4vc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC9hdXRoR3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHsgU2lnbmluQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbmluL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7fSBmcm9tIFwiLi9tYWluL2NhbnRlZW4vY2FudGVlbi5jb21wb25lbnRcIlxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL21haW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJtYWluXCIsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcInNjaGVkdWxlXCIsIGNvbXBvbmVudDogU2NoZWR1bGVDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxuICAgIHsgcGF0aDogXCJncmFkZXNcIiwgY29tcG9uZW50OiBHcmFkZXNDb21wb25lbnQsIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSB9LFxuICAgIHsgcGF0aDogXCJpdGVtLWEvOmlkXCIsIGNvbXBvbmVudDogSXRlbURldGFpbENvbXBvbmVudEEgfSxcbiAgICB7IHBhdGg6IFwiaXRlbS1iLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnRCIH0sXG4gICAgeyBwYXRoOiBcImRlZmF1bHRcIiwgY29tcG9uZW50OiBEZWZhdWx0Q29tcG9uZW50LCBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0gfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgY29tcG9uZW50OiBTZXR0aW5nc0NvbXBvbmVudCwgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcywge29uU2FtZVVybE5hdmlnYXRpb246ICdyZWxvYWQnfSldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=