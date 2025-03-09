import { Component, OnInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { SmallCardComponent } from "../../components/small-card/small-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
  imports: [MenuTitleComponent, BigCardComponent, SmallCardComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
