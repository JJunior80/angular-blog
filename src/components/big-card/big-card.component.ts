import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string= ""
  @Input()
  cardDescription:string =""
  @Input() Id!: number;  // ✅ Agora Id é um número



  constructor() { }
  ngOnInit(): void {
    this.Id = Number(this.Id) || 0;  // ✅ Garante que nunca será undefined
  }
  
  

}