import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { CoreModule } from '../core.module';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        PagesRoutingModule,
        DialogsModule,
    ],
    declarations: [
        HomeComponent,
        AssetsComponent,
    ],
    exports: [
        HomeComponent,
        AssetsComponent,
    ],
})

export class PagesModule { }