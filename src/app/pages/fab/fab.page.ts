import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonFooter,
  IonLabel,
  IonList,
  IonItem,
  IonAvatar,
  IonIcon,
  IonFabButton,
  IonFab,
  IonFabList,
} from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

import { addIcons } from 'ionicons';
import {
  addOutline,
  logoYoutube,
  logoGithub,
  logoFacebook,
  logoMedium,
  logoTwitter,
  logoGitlab,
} from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [
    IonFabList,
    IonFab,
    IonFabButton,
    IonIcon,
    IonAvatar,
    IonItem,
    IonList,
    IonLabel,
    IonFooter,
    IonTitle,
    IonToolbar,
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
  ],
})
export class FabPage implements OnInit {
  data = Array(100);

  constructor() {
    addIcons({
      addOutline,
      logoTwitter,
      logoYoutube,
      logoGitlab,
      logoFacebook,
      logoGithub,
      logoMedium,
    });
  }

  ngOnInit() {}
}
