import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  imgsrc: string = "https://farm"
  imgfarmid: string = ".staticflickr.com/"
  final: string

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

        console.log(title)
      }
    };
    xhr.open('GET', this.imagesearchurl, true);
    xhr.send();
    console.log(this.imagesearchurl)
  }

  // Create a url which is then sent through an https GET request. The return is then turned into an xml file and can be read.
  private flickrtest(){
   // var window
    var results
    var atest: string = this.baseurl+"?method=flickr.test.echo&api_key="+this.APIkey;
    console.log (atest)
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        results = this.responseText;
        console.log(results)
          var parser = new DOMParser();
          var xmlDoc= parser.parseFromString(results,  "text/xml");
        var x = xmlDoc.getElementsByTagName('method')[0];
        var y = x.childNodes[0]; // y is the value of the tag 'method' in the xml file.
        console.log(y)
      }
    };
    xhr.open('GET', atest, true);
    xhr.send();
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
