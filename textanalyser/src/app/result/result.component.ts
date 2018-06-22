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

  // public storeurls() { // used to get the url components from storage, make the final url and store it.
  //   for (var i = 0; i < 4; i++) {
  //     var Sid: string = localStorage.getItem("id" + i);
  //     var Sowner: string = localStorage.getItem("owner" + i);
  //     var Ssecret: string = localStorage.getItem("secret" + i);
  //     var Sserver: string = localStorage.getItem("server" + i);
  //     var Sfarm: string = localStorage.getItem("farm" + i);
  //     var Stitle: string = localStorage.getItem("title" + i);
  //     var Sispublic: string = localStorage.getItem("ispublic" + i);
  //     var Sisfriend: string = localStorage.getItem("isfriend" + i);
  //     var Sisfamily: string = localStorage.getItem("isfamily" + i);
  //
  //     // gets url img for src
  //     var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_z.jpg";
  //     localStorage.setItem("final" + i, final); // store final url in local storage.
  //   }
  // }

  public changeoptionsizes(){
  console.log("heh")
     for (var i = 0; i <= 4; i++) {
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
       var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_m.jpg";
       var finalmed: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_n.jpg";

       // document.getElementById("option"+i).style.backgroundImage='url('+ final + ')';
       localStorage.setItem("final" + i, final); // store final url in local storage.
       localStorage.setItem("finalmed" + i, finalmed);
     }

/////////////////////////////////////////////////////////////// option 0

       var final = localStorage.getItem("finalmed0");
       var img = new Image();
       img.src = final;
       var height = img.height;
       var width = img.width;
       img.onload = function () {
         document.getElementById("option0").style.height = height + "px"; // change height of textarea (do before page loads)
         document.getElementById("option0").style.width = width + "px"; // change width of textarea (do before page loads)
       };
    document.getElementById("option0").style.backgroundImage='url('+ final + ')';

/////////////////////////////////////////////////////////////// option 1

    var final1 = localStorage.getItem("final1");
    var img1 = new Image();
    img1.src = final1;
    var height1 = img1.height;
    var width1 = img1.width;
    img1.onload = function () {
      document.getElementById("option1").style.height = height1 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option1").style.width = width1 + "px"; // change width of textarea (do before page loads)
    };
    document.getElementById("option1").style.backgroundImage='url('+ final1 + ')';

/////////////////////////////////////////////////////////////// option 2

    var final2 = localStorage.getItem("final2");
    var img2 = new Image();
    img2.src = final2;
    var height2 = img2.height;
    var width2 = img2.width;
    img2.onload = function () {
      document.getElementById("option2").style.height = height2 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option2").style.width = width2 + "px"; // change width of textarea (do before page loads)
    };
    document.getElementById("option2").style.backgroundImage='url('+ final2 + ')';

///////////////////////////////////////////////////////////////

    var final3 = localStorage.getItem("final3");
    var img3 = new Image();
    img3.src = final3;
    var height3 = img3.height;
    var width3 = img3.width;
    img3.onload = function () {
      document.getElementById("option3").style.height = height3 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option3").style.width = width3 + "px"; // change width of textarea (do before page loads)
    };
    document.getElementById("option3").style.backgroundImage='url('+ final3 + ')';

    /////////////////////////////////////////////////////////////

    var final4 = localStorage.getItem("final4");
    var img4 = new Image();
    img4.src = final4;
    var height4 = img4.height;
    var width4 = img4.width;
    img4.onload = function () {
      document.getElementById("option4").style.height = height4 + "px"; // change height of textarea (do before page loads)
      document.getElementById("option4").style.width = width4 + "px"; // change width of textarea (do before page loads)
    };
    document.getElementById("option4").style.backgroundImage='url('+ final4 + ')';
  }

  public option1to0(){// selected photo 1, swapping with photo 0
    console.log("ye clicked me!")
    // get medium size photo for option 1
    var medopt1 = localStorage.getItem("finalmed1")

    // get small size photo for option 0
    var smalopt0 = localStorage.getItem("final0")

  }


  public option2to0(){ // selected photo 2, swapping with photo 0
    // get medium size photo for option 2
    var medopt2 = localStorage.getItem("finalmed2")

    // get small size photo for option
    var smalopt0 = localStorage.getItem("final0")

  }


  public option3to0(){// selected photo 3, swapping with photo 0
    // get medium size photo for option 3
    var medopt3 = localStorage.getItem("finalmed3")

    // get small size photo for option 0
    var smalopt0 = localStorage.getItem("final0")

  }


  public option4to0(){ // selected photo 4, swapping with photo 0
    // get medium size photo for option 4
    var medopt4 = localStorage.getItem("finalmed4")

    // get small size photo for option 0
    var smalopt0 = localStorage.getItem("final0")

  }

  private bfunction() {
    this.role = (<HTMLInputElement>document.getElementById("option0")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
   // document.getElementById("thetextarea").style.width = "500px";
   // document.getElementById("thetextarea").style.height = "500px";
  }

  constructor() {

  }

  ngOnInit() {
    console.log("running page")
    for (var i = 0; i< 5; i++) {
      this.changeoptionsizes();
    }
    this.changeoptionsizes();
  }

}
