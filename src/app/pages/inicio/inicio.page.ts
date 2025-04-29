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
  IonButtons,
  IonMenuButton,
  MenuController} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  americanFootballOutline,
  alertCircleOutline,
  personCircleOutline,
  radioButtonOffOutline,
  albumsOutline,
  checkmarkCircleOutline,
  calendarOutline,
  balloonOutline,
  gridOutline,
  infiniteOutline,
  documentTextOutline,
  listOutline,
  reorderThreeOutline,
  refreshOutline,
  menu,
} from 'ionicons/icons';

import { UsersService } from '../../services/users.service';
import { ComponentsIntf } from '../../interfaces/Components';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButtons, 
    IonMenuButton,
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

  components!: Observable<ComponentsIntf[]>;

  constructor(private menuCtrl: MenuController, 
              private usersService: UsersService) {
    addIcons({
      menu,
      americanFootballOutline,
      alertCircleOutline,
      personCircleOutline,
      radioButtonOffOutline,
      albumsOutline,
      checkmarkCircleOutline,
      calendarOutline,
      balloonOutline,
      gridOutline,
      infiniteOutline,
      documentTextOutline,
      listOutline,
      reorderThreeOutline,
      refreshOutline,
    });
  }

  ngOnInit() {
    this.components = this.usersService.getMenu();
  }
  
  openMenu() {
    this.menuCtrl.open('main-menu');
  }
}
