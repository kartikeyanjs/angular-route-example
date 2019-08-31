import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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