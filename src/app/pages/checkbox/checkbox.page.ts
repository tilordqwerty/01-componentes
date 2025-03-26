import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonCheckbox,
  IonButton,
} from '@ionic/angular/standalone';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonContent,
    IonList,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
  ],
})
export class CheckboxPage implements OnInit {
  myForm: FormGroup;

  checksArray = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: false,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: false,
    },
    {
      name: 'danger',
      selected: false,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      agree: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {}

  onClick(item: any) {
    console.log(item);
  }

  showChecks() {
    console.log(this.checksArray);
  }

  onSubmit() {
    this.myForm.get('agree')!.markAsTouched();
  }
}
