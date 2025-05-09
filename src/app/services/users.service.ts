import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ComponentsIntf } from '../interfaces/Components';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private httpClient = inject(HttpClient);
  
  constructor() {}
  
  getUsers(){
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
  }
  
  deleteUser(id: any) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getMenu(){
    return this.httpClient.get<ComponentsIntf[]>(`assets/json/menu.json`);
  }
}