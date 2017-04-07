"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var overlayService_1 = require("./overlayService");
var overlayComponent_1 = require("./overlayComponent");
var overlayHostComponent_1 = require("./overlayHostComponent");
var OverlayModule = (function () {
    function OverlayModule() {
    }
    return OverlayModule;
}());
OverlayModule = __decorate([
    core_1.NgModule({
        declarations: [
            overlayComponent_1.OverlayComponent,
            overlayHostComponent_1.OverlayHostComponent
        ],
        exports: [
            overlayComponent_1.OverlayComponent,
            overlayHostComponent_1.OverlayHostComponent
        ],
        providers: [
            overlayService_1.OverlayService
        ],
        entryComponents: [
            overlayComponent_1.OverlayComponent
        ]
    })
], OverlayModule);
exports.OverlayModule = OverlayModule;
//# sourceMappingURL=overlay.module.js.map