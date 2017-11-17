import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from './auth/auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';
import { NoContentComponent } from './components/no-content/no-content.component';

const routes: Routes = [
    { path: '', redirectTo:'start', pathMatch:'full'},
    { path: 'start', component: StartComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: '**', component: NoContentComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:false}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}