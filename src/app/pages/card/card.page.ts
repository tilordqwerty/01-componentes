import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg, IonLabel, IonItem, IonIcon, IonButton, IonButtons } from '@ionic/angular/standalone';

import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import {bookmarkOutline, bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonIcon, IonItem, IonLabel, IonCardContent,IonImg, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class CardPage implements OnInit {

  marked: boolean = false;

  constructor() { 
    addIcons({bookmarkOutline, bookmark});
  }

  ngOnInit() {
  }

  onClick(){
    this.marked = !this.marked;
  }

}
