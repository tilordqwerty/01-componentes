import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ActionSheetController} from '@ionic/angular/standalone';

import { HeaderComponent } from 'src/app/components/header/header.component';

import { addIcons } from 'ionicons';
import { trashOutline, shareOutline, removeCircleOutline} from 'ionicons/icons';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, HeaderComponent, CommonModule, FormsModule]
})
export class ActionSheetPage {

  constructor(private actionSheetCtrl: ActionSheetController) {
    addIcons({trashOutline, shareOutline, removeCircleOutline})
  }

  displayActionSheet(){
    this.presentActionSheet();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones',
      backdropDismiss: false,
      mode:'ios',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          icon: 'trash-outline',
          cssClass: 'red-icon',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Compartir',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: 'remove-circle-outline',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }
}
