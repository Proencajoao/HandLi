import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { }

  inputFoto = null;
  foto = 'avatar.png';
  ngOnInit() {
  }

  alterarFoto(){
    if (this.inputFoto != null) this.foto = this.inputFoto;
    console.log("Funcionou");
  }
}
