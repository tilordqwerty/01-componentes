import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ModalPage implements OnInit {
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  
  async openModal() {
      const modal = await this.modalCtrl.create({
        component: ModalInfoPage,
        cssClass: 'modal-info',
        componentProps: {
          name: 'John Doe',
          age: 30,
          country: 'USA',
          email: 'doe@therealjoe.com',
          phone: '123-456-7890',
          address: '123 Main St, Springfield, USA',
          hobbies: ['Reading', ' Cooking', ' Coding', ' Gym'],
          occupation: 'Software Engineer',
          company: 'Gitlab',
          nvim_config_repo: 'https://github.com/therealjohndoe/nvim-config',
        }

      });
      modal.present();
      
      const {data} = await modal.onWillDismiss();     
      console.log('Modal closed with response: ', data);
  }
}
