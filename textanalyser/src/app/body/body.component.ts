import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  private role: string;


  private afunction(){
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)


 //  var test = "teeest";
   // test = (<HTMLInputElement>document.getElementById("thetextarea")).value;
      //document.getElementById("demo").innerHTML = this.role;
       }

  constructor() {}

  ngOnInit() {
  }

}
