"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/** Adds components in overlay to the HTML tree at position specified by `overlay-host` component. */
var OverlayService = (function () {
    function OverlayService() {
    }
    OverlayService.prototype.registerHost = function (hostComponent) {
        this.host = hostComponent;
    };
    OverlayService.prototype.openComponentInPopup = function (componentType, options) {
        if (!this.host) {
            throw new Error("Host is not registered");
        }
        var opt = {
            alignWithElement: null,
            alignment: {
                element: {
                    horizontal: 1 /* Left */,
                    vertical: 1 /* Top */
                },
                target: {
                    horizontal: 1 /* Left */,
                    vertical: 3 /* Bottom */
                }
            },
            closeOnClick: false
        };
        if (options) {
            opt.alignWithElement = options.alignWithElement || opt.alignWithElement;
            opt.alignment = options.alignment || opt.alignment;
            if (options.closeOnClick !== null && options.closeOnClick !== undefined) {
                opt.closeOnClick = options.closeOnClick;
            }
        }
        return this.host.openComponentInPopup(componentType, opt);
    };
    return OverlayService;
}());
OverlayService = __decorate([
    core_1.Injectable()
], OverlayService);
exports.OverlayService = OverlayService;
//# sourceMappingURL=overlayService.js.map