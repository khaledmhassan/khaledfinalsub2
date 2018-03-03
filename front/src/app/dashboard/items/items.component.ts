import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
@Component({
  selector: 'app-dashboard-items',
  template:'<ng2-smart-table [settings]="settings" [source]="prod" (editConfirm)="update($event)" (createConfirm)="create($event)" (deleteConfirm)="delete($event)"></ng2-smart-table>'
,  providers: [ItemsService]
})
export class ItemsComponent implements OnInit {
  prod;
  constructor(private ItemsService:ItemsService ){}
  settings = {
  edit:{confirmSave:true},
  delete: {confirmDelete:true},
  add:{confirmCreate:true},
    columns: {
      name: {
        title: 'Full Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created At'
      },
      updatedAt: {
        title: 'Updated At'
      },
      username: {
        title: 'Seller Name'
      },
      componentNo: {
        title: 'Component Number'
      }
    }
  };
  ngOnInit(){
    this.ItemsService.getProducts().subscribe(
      (res:any)=>{
        this.prod=res.data;
        console.log(res);
      }
    )
  }
  update(event){
    var id = event.data._id
    var data = {"name" : event.newData.name,
    "price" : event.newData.price,
    "createdAt" : event.newData.createdAt,
    "updatedAt": event.newData.updatedAt,
    "username": event.newData.username,
    "componentNo": event.newData.componentNo
    };
this.ItemsService.updateProduct(id,data).subscribe(
res => {
console.log(res);
event.confirm.resolve(event.newData);
}
) }
delete(event) {
var id = event.data._id
    this.ItemsService.deleteProduct(id).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.source.Data);
  }
)
}
create(event) {
var data = {"name" : event.newData.name,
            "price" : event.newData.price,
            "createdAt" : event.newData.createdAt,
            "updatedAt": event.newData.updatedAt,
            "username": event.newData.username,
            "componentNo": event.newData.componentNo
            };
  this.ItemsService.createProduct(data).subscribe(
    res => {
      console.log(res);
      event.confirm.resolve(event.newData);
    }
  )
}
}

