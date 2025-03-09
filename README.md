---

## 📄 ** README.md - Angular Blog**  

```md
# 🚀 **Criando seu Blog com Angular**  

## 📌 **Descrição do Projeto**  

O **Angular Blog** é um projeto desenvolvido com **Angular 14** que permite a criação de um **blog pessoal** para compartilhar artigos sobre tecnologia.  
O projeto utiliza **componentização, roteamento e manipulação de dados** para criar um layout organizado e responsivo.  

✅ **Funcionalidades principais:**  
✔ Exibir artigos no formato de **cards** na página inicial.  
✔ Sistema de **rotas** para acessar artigos individuais.  
✔ Layout responsivo e moderno.  
✔ Utilização de **dados simulados (Fake API)**.  
✔ Estrutura modular para facilitar a escalabilidade.  

---

## 🔧 **Tecnologias Utilizadas**  

| Tecnologia         | Descrição |
|-------------------|-------------------------------------------|
| **Angular 14**    | Framework moderno para desenvolvimento web. |
| **TypeScript**    | Superset do JavaScript para tipagem segura. |
| **Bootstrap**     | Framework CSS para estilização responsiva. |
| **HTML5 & CSS3**  | Estruturação e estilização do blog. |

---

## 📂 **1. Estrutura do Projeto**  

O projeto segue **boas práticas de organização**, separando componentes, páginas e serviços.  
  

```bash
Projeto: angular-blog/
├── Pasta my-app/
│   ├── Pasta/.angular/
│   ├── Pasta/.ideas/
│   │   ├── Arquivo: blogideia.webp
│   │   ├── Arquivo: layout-componentizado.png
│   ├── Pasta/.vscode/
│   │   ├── Arquivo: extensions.json
│   │   ├── Arquivo: launch.json
│   │   ├── Arquivo: tasks.json
│   ├── Pasta/node_modules/
│   ├── Pasta/public/
│   │   ├── Arquivo: favicon.ico
│   ├── Pasta/src/
│   │   ├── Pasta/app/
│   │   │   ├── Arquivo: app-routing.module.ts
│   │   │   ├── Arquivo: app.component.css
│   │   │   ├── Arquivo: app.component.html
│   │   │   ├── Arquivo: app.component.spec.ts
│   │   │   ├── Arquivo: app.component.ts
│   │   │   ├── Arquivo: app.config.server.ts
│   │   │   ├── Arquivo: app.config.ts
│   │   │   ├── Arquivo: app.routes.server.ts
│   │   │   ├── Arquivo: app.routes.ts
│   │   ├── Pasta/src/components/big-card/
│   │   │   ├── Arquivo: big-card.component.css
│   │   │   ├── Arquivo: big-card.component.html
│   │   │   ├── Arquivo: big-card.component.ts
│   │   ├── Pasta/src/components/menu-bar/
│   │   │   ├── Arquivo: menu-bar.component.css
│   │   │   ├── Arquivo: menu-bar.component.html
│   │   │   ├── Arquivo: menu-bar.component.ts
│   │   ├── Pasta/src/components/menu-title/
│   │   │   ├── Arquivo: menu-title.component.css
│   │   │   ├── Arquivo: menu-title.component.html
│   │   │   ├── Arquivo: menu-title.component.ts
│   │   │   ├── Arquivo: menu-title.responsive.component.css
│   │   ├── Pasta/src/components/small-card/
│   │   │   ├── Arquivo: small-card.component.css
│   │   │   ├── Arquivo: small-card.component.html
│   │   │   ├── Arquivo: small-card.component.ts
│   │   ├── Pasta/src/data/
│   │   │   ├── Arquivo: dataFake.ts
│   │   ├── Pasta/src/environments/
│   │   │   ├── Arquivo: environment.prod.ts
│   │   │   ├── Arquivo: environment.ts
│   │   ├── Pasta/src/pages/content/
│   │   │   ├── Arquivo: content.component.css
│   │   │   ├── Arquivo: content.component.html
│   │   │   ├── Arquivo: content.component.ts
│   │   ├── Pasta/src/pages/home/
│   │   │   ├── Arquivo: home.component.css
│   │   │   ├── Arquivo: home.component.html
│   │   │   ├── Arquivo: home.component.ts

---

## 🖼️ **2. Estrutura dos Componentes**  

O projeto possui **componentes reutilizáveis** para facilitar a organização.  

### **🏠 Componente `HomeComponent`**  
Exibe os artigos na página principal utilizando **cards**.  

### **📄 Componente `ContentComponent`**  
Exibe o conteúdo detalhado do artigo ao clicar em um card.  

### **🖥️ Componentes de Interface**  
✔ **BigCardComponent** - Card principal em destaque.  
✔ **SmallCardComponent** - Cards menores para outros artigos.  
✔ **MenuBarComponent** - Barra de navegação.  
✔ **MenuTitleComponent** - Título do menu.  

---

## 🔀 **3. Configurando o Sistema de Rotas**  

📂 **Arquivo `app-routing.module.ts`**  
```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: ContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

---

## 💾 **4. Criando uma Base de Dados Fake**  

Como ainda não temos uma API, criamos um arquivo **`dataFake.ts`** para armazenar os artigos:  

📂 **src/app/data/dataFake.ts**  
```ts
export const dataFake = [
  {
    id: '1',
    title: 'Angular 14: Novidades e Melhorias',
    description: 'Confira as novidades da versão 14 do Angular...',
    photoCover: 'https://source.unsplash.com/600x300/?technology',
  },
  {
    id: '2',
    title: 'Como melhorar sua performance em Angular',
    description: 'Dicas essenciais para otimizar sua aplicação...',
    photoCover: 'https://source.unsplash.com/600x300/?coding',
  },
];
```

---

## 🏠 **5. Criando a Página Inicial**  

📂 **`home.component.ts`**  
```ts
import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles = dataFake;

  constructor() {}

  ngOnInit(): void {}
}
```

📂 **`home.component.html`**  
```html
<div class="container">
  <app-big-card
    *ngIf="articles.length"
    [title]="articles[0].title"
    [description]="articles[0].description"
    [photoCover]="articles[0].photoCover"
    [id]="articles[0].id">
  </app-big-card>

  <div class="small-cards">
    <app-small-card
      *ngFor="let article of articles.slice(1)"
      [title]="article.title"
      [photoCover]="article.photoCover"
      [id]="article.id">
    </app-small-card>
  </div>
</div>
```

---

## 📑 **6. Criando a Página de Conteúdo do Post**  

📂 **`content.component.ts`**  
```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.article = dataFake.find(post => post.id === params['id']);
    });
  }
}
```

📂 **`content.component.html`**  
```html
<div class="post">
  <img [src]="article?.photoCover" alt="Imagem do post">
  <h1>{{ article?.title }}</h1>
  <p>{{ article?.description }}</p>
</div>
```

---

## 🎨 **7. Melhorando a Estilização**  

📂 **styles.css**  
```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.container {
  width: 80%;
  margin: auto;
}

.post img {
  width: 100%;
  height: auto;
}

.small-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

---

## 🔥 **8. Como Executar o Projeto**  

1️⃣ **Clone o repositório:**  
```sh
git clone https://github.com/seuUsuario/angular-blog.git
cd angular-blog
```

2️⃣ **Instale as dependências:**  
```sh
npm install
```

3️⃣ **Execute o servidor de desenvolvimento:**  
```
# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

```

## 🎯 **9. Melhorias Futuras**  

✅ Criar um painel de administração para adicionar novos posts.  
✅ Integrar com Firebase para salvar os artigos.  
✅ Adicionar um sistema de login com autenticação JWT.  
✅ Criar um layout responsivo para mobile.  

---

## 📝 **10. Licença**  

Este projeto está sob a **Licença MIT**.  

---
✨ **Desenvolvido por [Seu Nome](https://github.com/seuUsuario)**  
```  

# angular-blog
