import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonAvatar,
  IonInfiniteScroll,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../../components/header/header.component';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScroll,
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class InfiniteScrollPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll
  
  users: any[] = Array(20);

  constructor() {}

  ngOnInit() {}

  private generateUsers() {
    const newUsers = Array(20);

    this.users.push(...newUsers);
  }

  loadUsers(event: IonInfiniteScrollCustomEvent<void>) {
    
    console.log(event);

    
    setTimeout(() => {
    
      if(this.users.length > 100){
        
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true
        return;
        
      }
      
      this.generateUsers();
      
      this.infiniteScroll.complete();
    }, 1500);
  }
}
