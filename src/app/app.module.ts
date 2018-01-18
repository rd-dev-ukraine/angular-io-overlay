import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { DatePickerModule } from "../datepicker";
import { OverlayModule } from "../overlay";

import { AppComponent } from "./app.component";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        DatePickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
