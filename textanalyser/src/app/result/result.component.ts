import { Component, OnInit } from '@angular/core';


@Component({
  //selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [],
})
export class ResultComponent implements OnInit {
  private role: string;
  private localtext: string =  this.role = localStorage.getItem('inputtext');

  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
  }

  constructor() {

  }

  ngOnInit() {
  }

}
