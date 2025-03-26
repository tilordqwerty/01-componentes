import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton, IonButton, IonIcon } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
  
import {
  heart, 
  logoApple, 
  settingsSharp, 
  star, heartOutline } from 'ionicons/icons';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, 
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ButtonsPage implements OnInit {
  
  favorite: boolean = false;

  constructor() {
    addIcons({heartOutline,heart,star,logoApple,settingsSharp});
  }
  
  ngOnInit() {}
  
  onClick(){
    this.favorite = !this.favorite;
  }

}
