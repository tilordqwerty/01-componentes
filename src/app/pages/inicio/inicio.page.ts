import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonIcon,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  americanFootballOutline,
  alertCircleOutline,
  personCircleOutline,
  radioButtonOffOutline,
  albumsOutline,
  checkmarkCircleOutline,
  calendarOutline
} from 'ionicons/icons';

interface ComponentsIntf {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class InicioPage implements OnInit {
  components: ComponentsIntf[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert',
    },
    {
      icon: 'person-circle-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons',
    },
    {
      icon: 'albums-outline',
      name: 'Card',
      redirectTo: '/card',
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox',
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirectTo: '/date-time',
    },
  ];

  constructor() {
    addIcons({
      americanFootballOutline,
      alertCircleOutline,
      personCircleOutline,
      radioButtonOffOutline,
      albumsOutline,
      checkmarkCircleOutline,
      calendarOutline
    });
  }

  ngOnInit() {}
}
