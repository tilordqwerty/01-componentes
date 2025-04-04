import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonList, IonItem, IonInput, IonLabel, IonListHeader, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { addIcons } from 'ionicons';
import { eye, eyeOff, eyeOffOutline, eyeOutline, add } from 'ionicons/icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonButton, IonListHeader, IonLabel, IonInput, IonItem, IonList, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class InputPage implements OnInit {
  
  name: string = 'Gabriel Cisneros';
  
  user = {
    email: '',
    password: ''
  }

  eye: boolean = false;

  constructor() {
    addIcons({add,eyeOffOutline,eyeOutline});
  }

  ngOnInit() {
  }

  submitEmail(formInput: NgForm){
    console.log('submit')
    console.log(this.user);
    console.log(formInput)
  }

  showPassword() {
    
    this.eye = !this.eye;
    
    const input = document.querySelector('ion-input[type="password"]') as HTMLInputElement;
    
    if (this.eye) {
      input.type = 'text';
    }
    else {
      input.type = 'password';
    }

    
  }

}
