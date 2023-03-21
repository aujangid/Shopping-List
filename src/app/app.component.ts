import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  newDataAdded: any;
  showItemForm: boolean;

  addNewItem(items: any) {
    this.newDataAdded = items
  }
  callAddItem(show: boolean) {
    this.showItemForm = show;
  }
}
