import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AuthenticationResult, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter } from 'rxjs/operators';
// import {HousingLocationComponent} from '../housing-location/housing-location.component';
// import {HousingLocation} from '../housinglocation';
// import {HousingService} from '../housing.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
//   housingLocationList: HousingLocation[] = [];
//   housingService: HousingService = inject(HousingService);
//   filteredLocationList: HousingLocation[] = [];

  constructor(private authService: MsalService, private msalBroadcastService: MsalBroadcastService) {
    //   this.housingService
    //   .getAllHousingLocations()
    //   .then((housingLocationList: HousingLocation[]) => {
    //     this.housingLocationList = housingLocationList;
    //     this.filteredLocationList = housingLocationList;
    //   });
   }

  ngOnInit(): void {
    this.msalBroadcastService.msalSubject$
      .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.LOGIN_SUCCESS),
      )
      .subscribe((result: EventMessage) => {
        console.log(result);
        const payload = result.payload as AuthenticationResult;
        this.authService.instance.setActiveAccount(payload.account);
      });
    
    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None)
      )
      .subscribe(() => {
        this.setLoginDisplay();
      })
    
  }
  
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  filterResults(text: string) {
    // if (!text) {
    //   this.filteredLocationList = this.housingLocationList;
    //   return;
    // }
    // this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
    //   housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    // );
  }
}