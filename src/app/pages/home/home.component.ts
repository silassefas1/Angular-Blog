import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, SmallCardComponent, MenuTitleComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './responsive-home.component.css']
})
export class HomeComponent {

}
