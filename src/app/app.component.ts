import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServerName:string;
  newServerContent:string;
  serverElements = [{type:"server",name:"testserver",content:"testing"}];
  
  onAddServer(serverdata) {
    
    this.serverElements.push(serverdata);
  }

  onAddBlueprint(serverdata) {
    console.log(serverdata);
    this.serverElements.push({
      type: 'blueprint',
      name: serverdata.name,
      content: serverdata.content
    });
  }
}
