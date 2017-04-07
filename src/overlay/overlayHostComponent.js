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
var overlayComponent_1 = require("./overlayComponent");
var overlayService_1 = require("./overlayService");
var positioning_1 = require("./positioning");
var OverlayHostComponent = OverlayHostComponent_1 = (function () {
    function OverlayHostComponent(overlayService, componentFactoryResolver) {
        this.overlayService = overlayService;
        this.componentFactoryResolver = componentFactoryResolver;
    }
    OverlayHostComponent.prototype.openComponentInPopup = function (componentType, options) {
        var _this = this;
        return Promise.resolve(this.componentFactoryResolver.resolveComponentFactory(overlayComponent_1.OverlayComponent))
            .then(function (factory) { return _this.container.createComponent(factory); })
            .then(function (overlayRef) {
            return overlayRef.instance
                .addComponent(componentType)
                .then(function (result) {
                OverlayHostComponent_1.alignContainer(overlayRef.instance, options.alignWithElement, options.alignment);
                result.onDestroy(function () {
                    overlayRef.destroy();
                });
                var overlay = overlayRef.location.nativeElement;
                if (options.closeOnClick) {
                    var closeOnClickHandler_1 = function (e) {
                        var target = e.target;
                        if (target && target.nodeType === 1 && !_this.isDOMParent(target, overlay)) {
                            result.destroy();
                            window.removeEventListener("mousedown", closeOnClickHandler_1);
                        }
                    };
                    window.addEventListener("mousedown", closeOnClickHandler_1);
                }
                return result;
            });
        });
    };
    OverlayHostComponent.prototype.ngOnInit = function () {
        this.overlayService.registerHost(this);
    };
    /**
     * Gets the value indicating whether @{parent} is direct or indirect parent node of the specified @{element}.
     */
    OverlayHostComponent.prototype.isDOMParent = function (element, parent) {
        if (!element) {
            throw new Error("Element is required.");
        }
        if (!parent) {
            throw new Error("Parent is required.");
        }
        if (element === parent) {
            return true;
        }
        if (!element.parentElement) {
            return false;
        }
        return this.isDOMParent(element.parentElement, parent);
    };
    OverlayHostComponent.alignContainer = function (elRef, targetRef, alignment) {
        var element = elRef.elementRef.nativeElement;
        if (!element || (targetRef && !targetRef.nativeElement)) {
            return;
        }
        var elementRect = OverlayHostComponent_1.rectFromElement(element);
        var targetRect = targetRef ? OverlayHostComponent_1.rectFromElement(targetRef.nativeElement) : OverlayHostComponent_1.rectFromWindow();
        elRef.positionFixed = !targetRef;
        if (!elementRect || !targetRect) {
            return;
        }
        var newElementRect = positioning_1.position(elementRect, targetRect, alignment);
        var offsetLeft = element.offsetLeft + newElementRect.left - elementRect.left;
        var offsetTop = element.offsetTop + newElementRect.top - elementRect.top;
        elRef.left = offsetLeft;
        elRef.top = offsetTop;
    };
    OverlayHostComponent.rectFromElement = function (element) {
        if (!element) {
            throw new Error("Element is undefined.");
        }
        var position = {
            left: 0,
            top: 0
        };
        var current = element;
        do {
            position.left += current.offsetLeft;
            position.top += current.offsetTop;
            current = current.offsetParent;
        } while (current);
        return {
            left: position.left,
            top: position.top,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    };
    OverlayHostComponent.rectFromWindow = function () {
        return {
            left: window.scrollX,
            top: window.scrollY,
            width: window.innerWidth,
            height: window.innerHeight
        };
    };
    return OverlayHostComponent;
}());
__decorate([
    core_1.ViewChild("container", { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], OverlayHostComponent.prototype, "container", void 0);
OverlayHostComponent = OverlayHostComponent_1 = __decorate([
    core_1.Component({
        selector: "overlay-host",
        template: "<template #container></template>",
        entryComponents: [overlayComponent_1.OverlayComponent]
    }),
    __metadata("design:paramtypes", [overlayService_1.OverlayService,
        core_1.ComponentFactoryResolver])
], OverlayHostComponent);
exports.OverlayHostComponent = OverlayHostComponent;
var OverlayHostComponent_1;
//# sourceMappingURL=overlayHostComponent.js.map