import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAsset } from '../../../../../models/asset.model';

@Injectable({
    providedIn: 'root'
})
export class AssetsService {

    constructor(private http: HttpClient) { }

    assets(): Observable<IAsset[]> {
        return this.http.get<IAsset[]>('api/assets');
    }

    add(asset: IAsset): Observable<any> {
        return this.http.post<any>('api/asset', asset);
    }

}