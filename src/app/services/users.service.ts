import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';


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
}
