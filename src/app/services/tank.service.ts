import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IQueryResponse } from '../models/tank-models/query-response.interface';
import { IAccountDetails } from '../models/tank-models/account-details.interface';
import { IAccount } from '../models/tank-models/account.interface';
import { ITank } from '../models/tank-models/tank.interface';
import { ITankDetails } from '../models/tank-models/tank-details.interface';
import { IModuleDetails } from '../models/tank-models/module-details.interface';
import { GetModuleDetails } from '../models/tank-models/get-module-details';

const applicationId = '28d8ac42be14e9cfec30e8d56b33c632';
const baseUrl = 'https://api.worldoftanks.eu/wot/';

@Injectable({
  providedIn: 'root'
})
export class TankService {

  constructor(private http: HttpClient) { }

  getAccounts(search: string, limit: number): Observable<IQueryResponse<IAccount[]>> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('search', search)
      .set('limit', limit.toString());

    const options = { params };

    return this.http.get<IQueryResponse<IAccount[]>>(baseUrl + 'account/list/', options);
  }

  getAccountDetails(accountId: number): Observable<IAccountDetails> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('account_id', accountId.toString());

    const options = { params };

    return this.http.get<IQueryResponse<IAccountDetails>>(baseUrl + 'account/info/', options)
      .pipe(map(response => response.data[accountId]));
  }

  getTanks(accountId: number): Observable<ITank[]> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('account_id', accountId.toString());

    const options = { params };
    return this.http.get<IQueryResponse<any>>(baseUrl + 'account/tanks/', options)
      .pipe(map(response => response.data[accountId]));
  }

  getTankDetails(id: number): Observable<ITankDetails> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('tank_id', id.toString());

    const options = { params };

    return this.http.get<IQueryResponse<any>>(baseUrl + 'encyclopedia/vehicles/', options)
      .pipe(map(response => response.data[id]));
  }

  getModuleDetails(param: GetModuleDetails): Observable<IModuleDetails> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('module_id', param.moduleId.toString())
      .set('type', param.moduleType);

    const options = { params };

    return this.http.get<IQueryResponse<any>>(baseUrl + 'encyclopedia/modules/', options)
      .pipe(map(response => response.data[param.moduleId]));
  }
}
