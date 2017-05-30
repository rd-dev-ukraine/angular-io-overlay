import { ComponentRef, ElementRef, Injectable, Type } from "@angular/core";
import { Alignment } from "./positioning";
export interface PopupOptions {
    alignWithElement?: ElementRef;
    alignment?: Alignment;
    closeOnClick?: boolean;
}
export interface OverlayHost {
    openComponentInPopup<T>(componentType: Type<T>, options: PopupOptions): Promise<ComponentRef<T>>;
}
/** Adds components in overlay to the HTML tree at position specified by `overlay-host` component. */
@Injectable()
export declare class OverlayService {
    private host;
    registerHost(hostComponent: OverlayHost): void;
    openComponentInPopup<T>(componentType: Type<any>, options?: PopupOptions): Promise<ComponentRef<T>>;
}
