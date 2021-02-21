import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAsset } from '../../../../../models/asset.model'
import { MatDialog } from '@angular/material/dialog';
import { AssetsDialogComponent } from 'src/app/dialogs/assets-dialog/assets-dialog.component';
import { AssetsService } from 'src/app/services/assets-service/assets.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-assets',
    templateUrl: './assets.component.html',
    styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

    public assets: Observable<IAsset[]>;

    constructor(private http: HttpClient, private service: AssetsService, public dialog: MatDialog) { }

    public openDialog(): void {
        const dialogRef = this.dialog.open(AssetsDialogComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe((data: IAsset) => {
            this.service.add(data).subscribe(obj => {
                console.log(obj.id);
                this.assets = this.service.assets();
            });
        });
    }

    ngOnInit(): void {
        this.getData()
    }

    getData() {
        this.assets = this.service.assets();
    }

}
