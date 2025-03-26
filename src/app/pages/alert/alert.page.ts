import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, AlertController } from '@ionic/angular/standalone';

import { HeaderComponent } from 'src/app/components/header/header.component';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, HeaderComponent, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Ok',
          role: 'confirm',
          handler: () =>{
            console.log('click en ok!')
          }          
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           console.log('click en cancelar!')
          }
        },
      ],
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Introduce tu info',
      inputs: [
        {
          type:'text',
          placeholder: 'Nombre'
        },
        {
          type: 'text',
          placeholder: 'Nombre de usuario',
          attributes: {
            maxlength: 12,
          }
        },
        {
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100
        },
        {
          type: 'date',
          min: '1930-1-1'
        },
        {
          type: 'textarea',
          placeholder: 'Cuentanos un poco sobre ti',
        }
      ],
      buttons: [
      {
        text: 'Ok',
        role: 'confirm',
        handler: (data: any) =>{
          console.log(data)
        }          
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
         console.log('click en cancelar!')
        }
      }
    ]
    });

    await alert.present();
  }


}
