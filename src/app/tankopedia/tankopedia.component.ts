import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { TankService, Account, AccountDetails, Tank } from '../tank.service';

@Component({
  selector: 'app-tankopedia',
  templateUrl: './tankopedia.component.html',
  styleUrls: ['./tankopedia.component.scss']
})
export class TankopediaComponent implements OnInit {
  accounts$: Observable<Account[]>;
  accDetails: AccountDetails;
  tanks: Tank[];
  private searchTerms = new Subject<string>();

  constructor(
    private http: HttpClient,
    private tankService: TankService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.accounts$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.tankService.getAccounts(term, 20)),

      map(result => result.data)
    );
  }

  downloadAccountDetails(accountId: number): void {
    this.tankService.getAccountDetails(accountId).subscribe(x => this.accDetails = x.data[accountId]);
    this.tankService.getTanks(accountId).subscribe(x => this.tanks = x.data[accountId]);
  }

}
