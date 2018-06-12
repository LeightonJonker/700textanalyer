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


  Sid: string = localStorage.getItem("id");
  Sowner: string = localStorage.getItem("owner");
  Ssecret: string = localStorage.getItem("secret");
  Sserver: string = localStorage.getItem("server");
  Sfarm: string = localStorage.getItem("farm");
  Stitle: string = localStorage.getItem("title");
  Sispublic: string = localStorage.getItem("ispublic");
  Sisfriend: string = localStorage.getItem("isfriend");
  Sisfamily: string = localStorage.getItem("isfamily");

  final: string = this.imgsrc + this.Sfarm + this.imgfarmid + this.Sserver + "/" + this.Sid + "_" + this.Ssecret + ".jpg";

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

        var id = x[0].getAttribute("id");
        var owner = x[0].getAttribute("owner");
        var secret = x[0].getAttribute("secret");
        var server = x[0].getAttribute("server");
        var farm = x[0].getAttribute("farm");
        var title = x[0].getAttribute("title");
        var ispublic = x[0].getAttribute("ispublic");
        var isfriend = x[0].getAttribute("isfriend");
        var isfamily = x[0].getAttribute("isfamily");
        // can successfully access saved xml file and get correct tags for image.
        localStorage.setItem("id", id);
        localStorage.setItem("owner", owner);
        localStorage.setItem("secret", secret);
        localStorage.setItem("server", server);
        localStorage.setItem("farm", farm);
        localStorage.setItem("title", title);
        localStorage.setItem("ispublic", ispublic);
        localStorage.setItem("isfriend", isfriend);
        localStorage.setItem("isfamily", isfamily);
        console.log(title)
      }
    };
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();
    console.log(this.Sispublic)
    console.log(this.final)

    //console.log(this.imagesearchurl)
  }

private flickrurl(){
    console.log(this.final)
document.getElementById("thetextarea").style.backgroundImage='url('+ this.final + ')';
    console.log("hi")
}

//   private getString(tag, element){
//    var list: NodeList = element.getElementsByTagName(tag);
//    if (list != null && list.getlength() > 0){
//      var sublist: NodeList = list.item(0).getChildNodes();
//      if (sublist != null && sublist.getLength() > 0) {
//        return sublist.item(0).getNodeValue();
//      }
//    }
//     return null;
// }

  private afunction(){
    this.role = (<HTMLInputElement>document.getElementById("thetextarea")).value;
    localStorage.setItem('inputtext',this.role );
    console.log(this.role)
       }

  constructor() {}

  ngOnInit() {
  }

}
