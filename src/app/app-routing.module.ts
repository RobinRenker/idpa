import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AuthGuardService } from './auth/auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
    { path: '', component: StartComponent},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}