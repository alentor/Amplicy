import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Asset, IAsset } from '../../../../../models/asset.model';

@Component({
    selector: 'app-assets-dialog',
    templateUrl: './assets-dialog.component.html',
    styleUrls: ['./assets-dialog.component.scss']
})
export class AssetsDialogComponent implements OnInit {

    constructor(public dialogRef: MatDialogRef<AssetsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: IAsset) {
        if (data === null) {
            this.data = new Asset();
        }
    }

    close(): void {
        this.dialogRef.close();
    }

    submit(data: IAsset): void {
        this.dialogRef.close(data);
    }

    ngOnInit(): void {
    }

}
