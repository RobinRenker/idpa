import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { NavigationComponent } from './components/navigation/navigation.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'test', component: NavigationComponent, canActivate: [AuthGuardService]},
    { path: '**', redirectTo: ''}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {useHash:true}) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}