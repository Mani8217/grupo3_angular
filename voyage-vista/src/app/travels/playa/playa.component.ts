import { Component } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playa',
  templateUrl: './playa.component.html',
  styleUrls: ['./playa.component.css']
})
export class PlayaComponent {
  constructor(private router: Router){}
  viviendas: IVivienda[] = []


  ngOnInit() {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/img/1imgplaya.webp',title:'azulprofundo'},
      {isAvailable:false, id:2 ,img: '../../../assets/img/2imgplaya.webp',title:'azulinfinito'},
      {isAvailable:true, id:3 ,img: '../../../assets/img/3imgplaya.webp',title:'azulclarito'},
      {isAvailable:false, id:4 ,img: '../../../assets/img/4imgplaya.webp',title:'azulaguamarina'},
      {isAvailable:false, id:5 ,img: '../../../assets/img/5imgplaya.webp',title:'azulmediterraneo'},
      {isAvailable:false, id:6 ,img: '../../../assets/img/6imgplaya.webp',title:'azulcielo'},


    ]
  }

  navigateToOtherComponent() {
    this.router.navigateByUrl('/playa');
  }


}
