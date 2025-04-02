import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css' ,'./responsive-small-card.component.css']
})
export class SmallCardComponent implements OnInit {
	
	@Input()
	smallCradPhotoCover:string = "";
	@Input()
	smallCradCardTitle:string = "";

	constructor(){
		
	}

	ngOnInit(): void {
	}

}
