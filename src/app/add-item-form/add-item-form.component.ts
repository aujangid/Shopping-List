import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  @ViewChild('Form', { static: true }) AddItemForm: NgForm
  @Output() newItemData = new EventEmitter<any>()
  constructor() { }
  AddFormItem = {
    name: '',
    price: ''
  }
  newItem: any;
  ngOnInit(): void {
  }

  onAddItem() {
    this.newItem = {
      name: this.AddItemForm.value.addItem.name,
      price: this.AddItemForm.value.addItem.price

    };
    this.newItemData.emit(this.newItem);
    this.AddItemForm.reset()
  }
}
