import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterLink,],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css' ,'./responsive-small-card.component.css']
})
export class SmallCardComponent implements OnInit {

	@Input()
	smallCradPhotoCover:string = "";
	@Input()
	smallCradCardTitle:string = "";
	@Input()
	id:string = "0"
	constructor(){

	}

	ngOnInit(): void {
	}

}
