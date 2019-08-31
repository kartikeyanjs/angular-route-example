import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { VerticalMenuComponent } from "./vertical-menu.component";

@NgModule({

    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [VerticalMenuComponent],
    exports: [VerticalMenuComponent]
})

export class VerticalMenuModule { }