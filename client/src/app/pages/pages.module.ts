import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { AssetsComponent } from './assets/assets.component';
import { CoreModule } from '../core.module';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        PagesRoutingModule],
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