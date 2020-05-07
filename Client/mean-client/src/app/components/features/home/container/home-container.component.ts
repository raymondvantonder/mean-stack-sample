import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as appActions from '../../../../state/app-actions';
import * as fromApp from '../../../../state';
import { Observable } from 'rxjs';
import { UserDetailsModel } from 'src/app/_models/user-details-model';
import { TokenDetailsModel } from 'src/app/_models/token-details-model';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

  userEmail$: Observable<string>;
  userDetails$: Observable<UserDetailsModel>;
  tokenDetails$: Observable<TokenDetailsModel>;

  constructor(private store: Store<fromApp.State>) { }

  ngOnInit(): void {
    this.userEmail$ = this.store.pipe(select(fromApp.getUserEmail));
    this.userDetails$ = this.store.pipe(select(fromApp.getUser));
    this.tokenDetails$ = this.store.pipe(select(fromApp.getToken));
  }

  loadUser(email: string): void {
    this.store.dispatch(new appActions.LoadUser(email));
  }
}
