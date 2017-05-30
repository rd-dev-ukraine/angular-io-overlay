import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Type, ViewContainerRef } from "@angular/core";

@Component({
    host: {
        "[class.fixed]": "positionFixed",
        "[style.left.px]": "left",
        "[style.top.px]": "top"
    },
    selector: "overlay",
    template: "<template #container></template>",
    styles: [
        `
        :host {
          position: absolute;
          z-index: 100;
        }

        :host.fixed {
          position: fixed;
        }
        `
    ]
})
export declare class OverlayComponent implements OnInit {
    private componentFactoryResolver;
    elementRef: ElementRef;
    private completeComponentCreation;
    positionFixed: boolean;
    left: number;
    top: number;
    container: ViewContainerRef;
    constructor(componentFactoryResolver: ComponentFactoryResolver, elementRef: ElementRef);
    addComponent<T>(componentType: Type<any>): Promise<ComponentRef<T>>;
    ngOnInit(): void;
}
