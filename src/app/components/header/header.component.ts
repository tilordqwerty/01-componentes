import { Component, Input} from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonTitle,
    IonHeader,
    IonToolbar, 
    IonButtons, 
    IonBackButton
  ]
})
export class HeaderComponent  {

  @Input() title: string ='';

  constructor() { }


}
