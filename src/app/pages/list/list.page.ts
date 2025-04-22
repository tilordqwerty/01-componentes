import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonList, IonLabel, IonItem, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component";
import { UsersService } from 'src/app/services/users.service';
import { Observable } from 'rxjs';
import { addIcons } from 'ionicons';
import { heartOutline, trashOutline, shareOutline } from 'ionicons/icons';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemOption, IonItemOptions, IonItemSliding, IonItem, IonLabel, IonList, IonContent, CommonModule, FormsModule, HeaderComponent]
})
export class ListPage implements OnInit {
  
  users!: Observable<any>;

  @ViewChild(IonList) ionList!: IonList;

  constructor(private usersService: UsersService) {
    
    addIcons({shareOutline, heartOutline, trashOutline});
  }
  
  ngOnInit() {
    this.showUsers();
  }
  
  showUsers() {
    this.users = this.usersService.getUsers();    
  }

  deleteUser(user: any) {
    this.usersService.deleteUser(user.id).subscribe(() => {
      this.showUsers();
    });
    console.log('removed!', user.name);
  }
  
  favoriteUser(user: any) {
    console.log('add to favorite!', user);
    this.ionList.closeSlidingItems();
  }
  
  shareUser(user: any) {
    console.log('shared!', user);
    this.ionList.closeSlidingItems();
  }
}
