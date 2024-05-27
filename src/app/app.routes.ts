import { Routes } from '@angular/router';
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

export const routes: Routes = [
{path: 'apple', component:AppleComponent},
{path: 'samsung', component:SamsungComponent},
{path: 'canon', component:CanonComponent},
{path: 'lg', component:LgComponent},
{path: 'nokia', component:NokiaComponent},
{path: 'sony', component:SonyComponent},
{path: 'huawei', component:HuaweiComponent},
{path: 'mi', component:MiComponent},
{path: 'philips', component:PhilipsComponent},
{path: 'jbl', component:JblComponent}
];
