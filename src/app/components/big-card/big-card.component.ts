import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  imports: [CommonModule],
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

	
  custructor(){

  }

  ngOnInit(): void {
  }
}
