import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './main-components/login/login.component';
import { HomeViewComponent } from './main-components/home/home.component';
import { CatalogViewComponent } from './main-components/catalog/catalog.component';

@NgModule({
  declarations: [ 
    LoginViewComponent, HomeViewComponent, CatalogViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


