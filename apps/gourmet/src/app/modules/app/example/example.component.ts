import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {FuseMediaWatcherService} from "../../../../@fuse/services/media-watcher";
import {MatDrawer} from "@angular/material/sidenav";
import {AllRecipeGQL} from "../../../@generated/graphql";

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ExampleComponent {
  @ViewChild('drawer') drawer: MatDrawer;

  drawerMode: 'over' | 'side' = 'side';
  drawerOpened = true;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _fuseMediaWatcherService: FuseMediaWatcherService,
    private readonly allRecipeGql: AllRecipeGQL
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.allRecipeGql.fetch().subscribe((test) => console.log(test))
    // Subscribe to media changes
    this._fuseMediaWatcherService.onMediaChange$
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(({matchingAliases}) => {

        // Set the drawerMode and drawerOpened if the given breakpoint is active
        if (matchingAliases.includes('md')) {
          this.drawerMode = 'side';
          this.drawerOpened = true;
        } else {
          this.drawerMode = 'over';
          this.drawerOpened = false;
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
