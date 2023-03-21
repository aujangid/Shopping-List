import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit, OnChanges {
  @Input() newDataAdded: any
  @Output() showAddItemForm = new EventEmitter<boolean>()
  
  shoppingCart = [
    {
      name: 'Bananas',
      price: 300
    },

    {
      name: 'Milk',
      price: 100
    },

    {
      name: 'pizza',
      price: 250
    }

  ];
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.newDataAdded) {
      this.shoppingCart.push(this.newDataAdded);
    }
  }

  ngOnInit(): void {
  }

  onAddItem(){
    this.showAddItemForm.emit(true);

  }

  removeItem(list: any) {
    this.shoppingCart = this.shoppingCart.filter(t => t.name !== list.name);
  }

}
