import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  imgsrc: string = "https://farm";
  imgfarmid: string = ".staticflickr.com/";

public storeurls() { // used to get the url components from storage, make the final url and store it.
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
    var final: string = this.imgsrc + Sfarm + this.imgfarmid + Sserver + "/" + Sid + "_" + Ssecret + "_z.jpg";
    localStorage.setItem("final" + i, final); // store final url in local storage.
  }
}

  private role: string;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  searchterm: string = "dog";
  searchextension: string = "?method=flickr.photos.search&api_key="
  private imagesearchurl: string = this.baseurl+this.searchextension+this.APIkey+"&tags="+this.searchterm;

  private flickrsearch(){
    //var window;
    var results;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;
        console.log(results)

          var parser = new DOMParser();
          var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.documentElement.getElementsByTagName("photo");


        for (var i = 0; i <= 4 ; i++) {
          var id = x[i].getAttribute("id");
          var owner = x[i].getAttribute("owner");
          var secret = x[i].getAttribute("secret");
          var server = x[i].getAttribute("server");
          var farm = x[i].getAttribute("farm");
          var title = x[i].getAttribute("title");
          var ispublic = x[i].getAttribute("ispublic");
          var isfriend = x[i].getAttribute("isfriend");
          var isfamily = x[i].getAttribute("isfamily");
          // can successfully access saved xml file and get correct tags for image.
          localStorage.setItem("id" + i, id);
          localStorage.setItem("owner" + i, owner);
          localStorage.setItem("secret" + i, secret);
          localStorage.setItem("server" + i, server);
          localStorage.setItem("farm" + i, farm);
          localStorage.setItem("title" + i, title);
          localStorage.setItem("ispublic" + i, ispublic);
          localStorage.setItem("isfriend" + i, isfriend);
          localStorage.setItem("isfamily" + i, isfamily);
          console.log(title)
        }
      }
    };
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();
    this.storeurls();
  }

private flickrurl() {
  for (var i = 0; i < 3; i++) {
    var final = localStorage.getItem("final" + i);
    console.log(final)
  }
document.getElementById("thetextarea").style.backgroundImage='url('+ final + ')';

  var img = new Image();
  img.src = final
  var height1 = img.height;
  var width1 = img.width;
    img.onload = function(){
    document.getElementById("thetextarea").style.height=height1+"px"; // change height of textarea (do before page loads)
    document.getElementById("thetextarea").style.width=width1+"px"; // change width of textarea (do before page loads)
    console.log(height1)
    };

}

  private afunction(){
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
       }

  constructor() {}

  ngOnInit() {
  }

}
