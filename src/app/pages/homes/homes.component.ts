import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-home',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css'],
  imports: [BigCardComponent, MenuTitleComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
