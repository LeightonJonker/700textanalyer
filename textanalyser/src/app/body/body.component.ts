import { Component, OnInit } from '@angular/core';


@Component({
 // selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers: []
})
export class BodyComponent implements OnInit {
  private role: string;
  private  baseurl: string = "https://api.flickr.com/services/rest/";
  private APIkey: string = "0109b289e8e411efba6806edf42383e3";
  private secret: string = "e418eb25616d04f4";
  private results: string;

  // Create a url which is then sent through an https GET request. The return is then turned into an xml file and can be read.
  private flickrtest(){
    var atest: string = this.baseurl+"?method=flickr.test.echo&api_key="+this.APIkey;
    console.log (atest)
   // var users = <HTMLElement>document.getElementById("method")
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function processRequest(){
      if (this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
        this.results = this.responseText;
        console.log(this.results)
        if (window.DOMParser){
          var parser = new DOMParser();
          var xmlDoc= parser.parseFromString(this.results,  "text/xml");
        }
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
