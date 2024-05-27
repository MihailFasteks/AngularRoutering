import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { AppleComponent } from './apple/apple.component';
import { CanonComponent } from './canon/canon.component';
import { HuaweiComponent } from './huawei/huawei.component';
import { JblComponent } from './jbl/jbl.component';
import { LgComponent } from './lg/lg.component';
import { MiComponent } from './mi/mi.component';
import { NokiaComponent } from './nokia/nokia.component';
import { PhilipsComponent } from './philips/philips.component';
import { SamsungComponent } from './samsung/samsung.component';
import { SonyComponent } from './sony/sony.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AppleComponent, CanonComponent, HuaweiComponent, JblComponent, 
  LgComponent, MiComponent, NokiaComponent, PhilipsComponent, SamsungComponent, SonyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myRouterProject';
}
