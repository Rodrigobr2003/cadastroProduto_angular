import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  listaProdutos: {}[];

  constructor() {
    this.listaProdutos = [];
  }

  nomeProduto: string = '';
  idProduto: number = 0;
  descricao: string = '';
  preco: number = 0;
  quantidade: number = 0;

  addProduto() {
    this.listaProdutos.push({
      nome: this.nomeProduto,
      id: this.idProduto,
      descricao: this.descricao,
      preco: this.preco,
      quantidade: this.quantidade,
    });
  }
}
