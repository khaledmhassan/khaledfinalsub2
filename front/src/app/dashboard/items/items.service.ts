import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) { }
getProducts() {

  var config = {
    headers: {
      'Content-Type':'application/json'
    }
  }
  return this.http.get(environment.apiUrl + 'usersProducts/getProducts');
}

getProductById(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProduct/:productId');
}

getProductBelowPrice(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsBelowPrice/:price');
}

createProduct(data){
  return this.http.post(environment.apiUrl + 'usersProducts/createProduct', data);
}

updateProduct(usersProductsId, data){
  return this.http.patch(environment.apiUrl + 'usersProducts/updateProduct/'+usersProductsId, data);
}

deleteProduct(usersProductsId){
  return this.http.delete(environment.apiUrl + 'usersProducts/deleteProduct/'+usersProductsId);
}

getProductsByUsername(){

 return this.http.get(environment.apiUrl + 'usersProducts/getProductsByUsername/:productId');

}
getProductsByComponent(){
  return this.http.get(environment.apiUrl + 'usersProducts/getProductsByComponent/:componentNo');
}

}