"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OverlayComponent = (function () {
    function OverlayComponent(componentFactoryResolver, elementRef) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.elementRef = elementRef;
        this.positionFixed = false;
    }
    OverlayComponent.prototype.addComponent = function (componentType) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.completeComponentCreation = function () {
                var factory = _this.componentFactoryResolver.resolveComponentFactory(componentType);
                var component = _this.container.createComponent(factory);
                resolve(component);
            };
        });
    };
    OverlayComponent.prototype.ngOnInit = function () {
        this.completeComponentCreation && this.completeComponentCreation();
    };
    return OverlayComponent;
}());
__decorate([
    core_1.ViewChild("container", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], OverlayComponent.prototype, "container", void 0);
OverlayComponent = __decorate([
    core_1.Component({
        host: {
            "[class.fixed]": "positionFixed",
            "[style.left.px]": "left",
            "[style.top.px]": "top"
        },
        selector: "overlay",
        template: "<template #container></template>",
        styles: [
            "\n        :host {\n          position: absolute;\n          z-index: 100;\n        }\n\n        :host.fixed {\n          position: fixed;\n        }\n        "
        ]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ElementRef])
], OverlayComponent);
exports.OverlayComponent = OverlayComponent;
//# sourceMappingURL=overlayComponent.js.map