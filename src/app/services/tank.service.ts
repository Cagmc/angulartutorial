import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { QueryResponse } from '../models/tank-models/query-response.interface';
import { AccountDetails } from '../models/tank-models/account-details.interface';
import { Account } from '../models/tank-models/account.interface';
import { Tank } from '../models/tank-models/tank.interface';
import { TankDetails } from '../models/tank-models/tank-details.interface';

const applicationId = '28d8ac42be14e9cfec30e8d56b33c632';
const baseUrl = 'https://api.worldoftanks.eu/wot/';

@Injectable({
  providedIn: 'root'
})
export class TankService {

  constructor(private http: HttpClient) { }

  getAccounts(search: string, limit: number): Observable<QueryResponse<Account[]>> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('search', search)
      .set('limit', limit.toString());

    const options = { params };

    return this.http.get<QueryResponse<Account[]>>(baseUrl + 'account/list/', options);
    // .pipe(tap(result => console.log(result)));
  }

  getAccountDetails(accountId: number): Observable<AccountDetails> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('account_id', accountId.toString());

    const options = { params };

    return this.http.get<QueryResponse<AccountDetails>>(baseUrl + 'account/info/', options)
      .pipe(map(response => response.data[accountId]));
  }

  getTanks(accountId: number): Observable<Tank[]> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('account_id', accountId.toString());

    const options = { params };
    return this.http.get<QueryResponse<any>>(baseUrl + 'account/tanks/', options)
      .pipe(map(response => response.data[accountId]));
  }

  getTankDetails(id: number): Observable<TankDetails> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('tank_id', id.toString());

    const options = { params };

    return this.http.get<QueryResponse<any>>(baseUrl + 'encyclopedia/vehicles/', options)
      .pipe(map(response => response.data[id]));
  }

  getModuleDetails(id: number, type: string): Observable<QueryResponse<any>> {
    const params = new HttpParams()
      .set('application_id', applicationId)
      .set('module_id', id.toString())
      .set('type', type);

    const options = { params };

    return this.http.get<QueryResponse<any>>(baseUrl + 'encyclopedia/modules/', options)
      .pipe(tap(result => console.log(result)));
  }
}

export class Lolz {

}
