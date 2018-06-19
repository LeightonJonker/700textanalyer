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
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";

  public storeurls() { // used to get the url components from storage, make the final url and store it.
    for (var i = 0; i < 4; i++) {
      var Sid: string = localStorage.getItem("id" + i);
      var Sowner: string = localStorage.getItem("owner" + i);
      var Ssecret: string = localStorage.getItem("secret" + i);
      var Sserver: string = localStorage.getItem("server" + i);
      var Sfarm: string = localStorage.getItem("farm" + i);
      var Stitle: string = localStorage.getItem("title" + i);
      var Sispublic: string = localStorage.getItem("ispublic" + i);
      var Sisfriend: string = localStorage.getItem("isfriend" + i);
      var Sisfamily: string = localStorage.getItem("isfamily" + i);

      // gets url img for src
      var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_z.jpg";
      localStorage.setItem("final" + i, final); // store final url in local storage.
    }
  }


  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
   // document.getElementById("thetextarea").style.width = "500px";
   // document.getElementById("thetextarea").style.height = "500px";
  }

  constructor() {

  }

  ngOnInit() {

  }

}
