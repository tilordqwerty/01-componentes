import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonDatetime, IonLabel, IonItem, IonList, IonListHeader } from '@ionic/angular/standalone';

import { HeaderComponent } from "../../components/header/header.component";



@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonListHeader, IonList, IonItem, IonLabel, IonContent, IonDatetime, CommonModule, FormsModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();

  customYearValues = [2025, 2000, 1975, 2012, 2020, 2015]

  customPickerOptions = {
    buttons: [
      {
        text: 'Save',
        role: 'confirm',
        handler: (event: any) => {
          console.log(event);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: (event: any) => {
          console.log('cancel!'),
          console.log(event);
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  changeDate(event: any){
    console.log(event);
    console.log(new Date(event.detail.value));    
  }

}
