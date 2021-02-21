import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAsset } from '../../../../../models/asset.model'
import { MatDialog } from '@angular/material/dialog';
import { AssetsDialogComponent } from 'src/app/dialogs/assets-dialog/assets-dialog.component';

@Component({
    selector: 'app-assets',
    templateUrl: './assets.component.html',
    styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

    public assets: IAsset[] = [];

    constructor(private http: HttpClient, public dialog: MatDialog) { }

    public openDialog() {
        this.dialog.open(AssetsDialogComponent, {
            width: '250px',
        });
    }

    ngOnInit(): void {
        this.http.get<IAsset[]>('api/assets').subscribe(data => this.assets = data);
    }

}
