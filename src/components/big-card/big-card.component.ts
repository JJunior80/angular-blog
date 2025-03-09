import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
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
  @Input()
  @Input() Id!: number;  // ✅ Agora Id é um número



  constructor() { }
  ngOnInit(): void {
    this.Id = Number(this.Id);  // 🔥 Converte se vier como string
  }
  

}