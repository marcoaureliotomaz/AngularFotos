import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  photos = [
    {
      url:'https://ssperfil.files.wordpress.com/2011/10/jcsyoph701hywqitlc45q.jpg?w=535',
      description:'Cavaleiro de Ouro de Leão'
    },

    {
      url:'https://cf.shopee.com.br/file/097849d5ea467003d7a04e12eb3e23f6',
      description:'Cavaleiro de Ouro de Sargitário'
    },
    {
      url:'https://www.drtoysegames.com.br/image/cache/catalog/Bandai/ClothLibraEx/01-libra-dokko-1000x1000.jpg',
      description:'Cavaleiro de Ouro de Libra'
    }
  ]

}
