import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsDialogComponent } from './assets-dialog/assets-dialog.component';
import { CoreModule } from '../core.module';

@NgModule({
    declarations: [
        AssetsDialogComponent,
    ],
    exports: [
        AssetsDialogComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
    ]
})
export class DialogsModule { }