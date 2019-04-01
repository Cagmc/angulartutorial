import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';

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

  return this.http.get<QueryResponse<Account[]>>(baseUrl + 'account/list/', options)
    .pipe(tap(result => console.log(result)));
 }

 getAccountDetails(accountId: number): Observable<QueryResponse<AccountDetails>> {
  const params = new HttpParams()
      .set('application_id', applicationId)
      .set('account_id', accountId.toString());

  const options = { params };

  return this.http.get<QueryResponse<AccountDetails>>(baseUrl + 'account/info/', options)
    .pipe(tap(result => console.log(result)));
 }

 getTanks(accountId: number): Observable<QueryResponse<any>> {
  const params = new HttpParams()
  .set('application_id', applicationId)
  .set('account_id', accountId.toString());

  const options = { params };

  return this.http.get<QueryResponse<any>>(baseUrl + 'account/tanks/', options)
    .pipe(tap(result => console.log(result)));
 }

 getTankDetails(id: number): Observable<QueryResponse<any>> {
  const params = new HttpParams()
  .set('application_id', applicationId)
  .set('tank_id', id.toString());
  console.info(id);
  const options = { params };

  return this.http.get<QueryResponse<any>>(baseUrl + 'encyclopedia/vehicles/', options)
    .pipe(tap(result => console.log(result)));
 }
}

// General
export class QueryResponse<T> {
  status: string;
  meta: ListMeta;
  data: T;
}

export class ListMeta {
  count: number;
}

// Account List
export class Account {
  nickname: string;
  account_id: number;
}

// Account details
export class AccountDetails {
  account_id: number;
  global_rating: number;
  nickname: string;
  created_at: Date;
}

// Tank list
export class Fos {

}

export class Tank {
  tank_id: number;
  mark_of_mastery: number;
}

// Tank details
export class TankDetails {
  name: string;
  nation: string;
  tier: number;
  type: string;
  description: string;
  price_credit: number;
  price_gold: number;
  is_premium: boolean;
  tag: string;
}
