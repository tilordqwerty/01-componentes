import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, LoadingController } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class LoadingPage {

  constructor(private loadingCtrl: LoadingController) { }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: `Dismissing after 3 seconds. Wait for 3 seconds...`,
      duration: 3000,
      cssClass: 'custom-loading',
      backdropDismiss: false,
      spinner: 'bubbles'
    });
    loading.present();
  }
}
