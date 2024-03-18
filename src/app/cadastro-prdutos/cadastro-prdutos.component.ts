import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-prdutos',
  templateUrl: './cadastro-prdutos.component.html',
  styleUrl: './cadastro-prdutos.component.css',
})
export class CadastroPrdutosComponent {
  @Input() produto: {
    nome: string;
    id: number;
    descricao: string;
    preco: number;
    quantidade: number;
  };
}
