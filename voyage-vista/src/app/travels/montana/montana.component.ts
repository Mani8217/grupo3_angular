import { Component } from '@angular/core';
import { IVivienda } from '../models/vivienda.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-montana',
  templateUrl: './montana.component.html',
  styleUrls: ['./montana.component.css']
})
export class MontanaComponent {
  constructor(private router: Router){}
  viviendas: IVivienda[] = []


  ngOnInit() {
    this.viviendas = [
      {isAvailable: true, id:1 ,img:'../../../assets/img/8imgmontaña.webp',title:'Tranquilidad'},
      {isAvailable:false, id:2 ,img: '../../../assets/img/9imgmontaña.webp',title:'PazInterna'},
      {isAvailable:true, id:3 ,img: '../../../assets/img/10imgmontaña.webp',title:'A cielo abierto'},
      {isAvailable:false, id:4 ,img: '../../../assets/img/11imgmontaña.webp',title:'Entre montañas'},
      {isAvailable:false, id:5 ,img: '../../../assets/img/12imgmontaña.webp',title:'Serenidad'},
      {isAvailable:true, id:6 ,img: '../../../assets/img/14imgmontaña.webp',title:'Casita encantada'},
      
      



    ]
  }

  navigateToOtherComponent() {
    this.router.navigateByUrl('/montaña');
  }
}
