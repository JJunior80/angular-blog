import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  @Input() Id!: number;  // ✅ Agora Id é um número


  constructor() { }
  ngOnInit(): void {
    this.Id = Number(this.Id) || 0;  // ✅ Garante que nunca será undefined
  }
  
  

}