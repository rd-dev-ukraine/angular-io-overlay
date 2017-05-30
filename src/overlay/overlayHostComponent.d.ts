import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Type, ViewContainerRef } from "@angular/core";
import { OverlayComponent } from "./overlayComponent";
import { OverlayHost, OverlayService, PopupOptions } from "./overlayService";
import { Alignment, Rect } from "./positioning";

@Component({
    selector: "overlay-host",
    template: "<template #container></template>",
    entryComponents: [OverlayComponent]
})
export declare class OverlayHostComponent implements OverlayHost, OnInit {
    private overlayService;
    private componentFactoryResolver;
    container: ViewContainerRef;
    constructor(overlayService: OverlayService, componentFactoryResolver: ComponentFactoryResolver);
    openComponentInPopup<T>(componentType: Type<T>, options: PopupOptions): Promise<ComponentRef<T>>;
    ngOnInit(): void;
    /**
     * Gets the value indicating whether @{parent} is direct or indirect parent node of the specified @{element}.
     */
    private isDOMParent(element, parent);
    static alignContainer(elRef: OverlayComponent, targetRef: ElementRef, alignment: Alignment): void;
    static rectFromElement(element: HTMLElement): Rect;
    static rectFromWindow(): Rect;
}
