import { NgModule } from "@angular/core";
import { OverlayComponent } from "./overlayComponent";
import { OverlayHostComponent } from "./overlayHostComponent";
import { OverlayService } from "./overlayService";

@NgModule({
    declarations: [
        OverlayComponent,
        OverlayHostComponent
    ],
    exports: [
        OverlayComponent,
        OverlayHostComponent
    ],
    providers: [
        OverlayService
    ],
    entryComponents: [
        OverlayComponent
    ]
})
export declare class OverlayModule {}
