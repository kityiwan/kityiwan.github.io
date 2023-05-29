import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IndexComponent } from "./index.component";
import { PartialsModule } from "./partials/partials.module";
import { ContactModule } from "./contact/contact.module";
import { AnimationModule } from "./animation/animation.module";
import { ModalModule } from "./modal/modal.module";
import { RouterModule } from "@angular/router";
@NgModule({
    imports: [BrowserModule, PartialsModule, ContactModule, AnimationModule, ModalModule, RouterModule],
    declarations: [
        IndexComponent
    ],
    exports: [IndexComponent]
})

export class IndexModule{}