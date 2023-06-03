import { Component } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cdomo',
  templateUrl: './cdomo.component.html',
  styleUrls: ['./cdomo.component.css']
})
export class CdomoComponent {
  constructor(private router: Router){}
  viviendas: IVivienda[] = []


  ngOnInit() {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/img/15imgcdomo.webp',title:'Tranquilidad'},
      {isAvailable:false, id:2 ,img: '../../../assets/img/16imgcdomo.webp',title:'A cielo abierto'},
      {isAvailable:true, id:3 ,img: '../../../assets/img/17imgcdomo.webp',title:'Serenidad'},
      {isAvailable:false, id:4 ,img: '../../../assets/img/18imgcdomo.webp',title:'Entre montañas'},
      
      



    ]
  }

  navigateToOtherComponent() {
    this.router.navigateByUrl('/cdomo');
  }


}
