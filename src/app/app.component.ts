import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
       routerLink="/login">Login</a> |

    <a routerLinkActive="active" 
       routerLink="/home">Home</a> | 

    <a routerLinkActive="active" 
      routerLink="/catalog">Catalog</a> 
      
    <router-outlet></router-outlet>
  </div>

<app-search-list (selectedList)="selectedGroupData($event)" [lists] = "groupList"></app-search-list>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    groupList =[
      { name:'Group1', id: 1 },
      { name:' Group2', id: 2 },
      { name:' Group3', id: 3 },
      { name:' Group4', id: 4 },
      { name:' Group5', id: 5 }
    ];
    selectedGroupData(event) {
        console.log('selected list component says', event)
    }
}

/** 
 * EXERCISE 1
 * Duration: 5/10 mins
 * 
 * Add a new route `/users` and display a text into the route component
 * 
 */

/** 
 * EXERCISE 2
 * Duration: 10/15 mins
 * 
 * Create a '<nav-bar>' component and move the menu there
 */