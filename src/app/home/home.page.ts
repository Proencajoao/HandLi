import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Gesto } from '../interface/gesto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url = 'http://lucasreno.kinghost.net/libras/';

  palavra = '';

  gesto: Gesto = {
    id: 0,
    palavra: '',
    imagem: null
  }

  constructor(
    private http: HttpClient
  ) {}

  traduzir(){
    this.http.get<Gesto[]>(this.url+this.palavra).subscribe(
      resposta =>{
        if(resposta.length > 0)
          this.gesto = resposta[0];
        else{
          this.gesto = {
            id: 0,
            palavra: '',
            imagem: null
          }
       }
      }
    );
  }
}
