import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonAvatar, IonImg, IonChip, IonLabel, IonItem } from '@ionic/angular/standalone';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonChip, IonImg, IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
