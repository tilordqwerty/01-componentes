import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonList,
  IonReorderGroup,
  ItemReorderEventDetail,
  IonLabel,
  IonReorder,
  IonToggle,
  IonIcon,
} from '@ionic/angular/standalone';
import { IonReorderGroupCustomEvent } from '@ionic/core';
import { syncOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonToggle,
    IonReorder,
    IonLabel,
    IonReorderGroup,
    IonList,
    IonItem,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ListReorderPage implements OnInit {
  public isReorderEnabled: boolean = !false;

  games: string[] = [
    'Super Mario Odissey',
    'Zelda: Tears of the Kingdom',
    'Minecraft',
    'Elden Ring',
    'Horizon Forbidden West',
    "No man's sky",
    'Starfield',
    'The Elder Scrolls V: Skyrim',
    'Fallout 3',
  ];

  constructor() {
    addIcons({ syncOutline });
  }

  ngOnInit() {}

  reorderGames(event: IonReorderGroupCustomEvent<ItemReorderEventDetail>) {
    console.log(
      `Dragged ${this.games[event.detail.from]} from index, ${event.detail.from
      }, to index, ${event.detail.to}`
    );

    const movedItem = this.games.splice(event.detail.from, 1)[0];

    this.games.splice(event.detail.to, 0, movedItem);

    event.detail.complete();

    console.log(this.games);
  }

  toggleReorder() {
    this.isReorderEnabled = !this.isReorderEnabled;
  }
}
