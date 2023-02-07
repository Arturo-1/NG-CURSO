import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SessionService } from '../../../auth/service/session.service';
import { User } from '../../../models/users.module';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnDestroy {
  @Output() toggleSidebar = new EventEmitter();
  public user:User|null=null;
  private destroyed$ = new Subject();
  constructor(private SessionService: SessionService) { 
    this.SessionService.user$
    .pipe(takeUntil(this.destroyed$))
    .subscribe((user)=>{
      if(user) this.user= user;
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

}
