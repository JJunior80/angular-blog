import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: number = 0;  // ✅ Alterado para number

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      const idParam = value.get("id");

      if (idParam) {
        this.id = Number(idParam); // ✅ Converte para número
        this.setValuesToComponent(this.id);
      }
    });
  }

  setValuesToComponent(id: number) {
    const result = dataFake.find(article => Number(article.id) === id);

  
    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    } else {
      console.error(`Nenhum artigo encontrado com ID ${id}`);
    }
  }
}