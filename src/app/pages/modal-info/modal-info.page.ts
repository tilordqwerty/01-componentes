import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ModalController,
  IonList,
  IonLabel,
  IonItem,
  IonListHeader,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [
    IonListHeader,
    IonItem,
    IonLabel,
    IonList,
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ModalInfoPage implements OnInit {
  
  @Input() address!: string;
  @Input() age!: number;
  @Input() company!: string;
  @Input() country!: string;
  @Input() email!: string;
  @Input() hobbies!: string[];
  @Input() name!: string;
  @Input() nvim_config_repo!: string;
  @Input() occupation!: string;
  @Input() phone!: string;
  
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  closeModal() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
