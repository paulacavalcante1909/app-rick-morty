import { Component, OnInit } from '@angular/core';
import { TemporadasService } from './temporadas.service';

@Component({
  selector: 'app-temporadas',
  templateUrl: './temporadas.component.html',
  styleUrls: ['./temporadas.component.css']
})
export class TemporadasComponent implements OnInit {

  constructor(private service: TemporadasService, ) { }
temp_1;
temp_2;
temp_3;
  ngOnInit(): void {
  this.service.temp_1 = []
  this.service.temp_2 = []
  this.service.temp_3 = []
  this.service.separaTemps()
  this.temp_1 = this.service.temp_1;
  this.temp_2 = this.service.temp_2;
  this.temp_3 = this.service.temp_3;
  }

 

}
