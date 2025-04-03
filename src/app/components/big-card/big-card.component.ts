import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule, RouterLink,],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css', './responsive-big-card.component.css']
})
export class BigCardComponent implements OnInit{

	@Input()
	bigCardPhotoCover:string = "";
	@Input()
	bigCardCardTitle:string = "";
	@Input()
	bigCardCardDescription:string ="";
	@Input()
	id:string = "0";


  custructor(){

  }

  ngOnInit(): void {
  }
}
