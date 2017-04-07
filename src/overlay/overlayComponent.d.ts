import { ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Type, ViewContainerRef } from "@angular/core";
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
