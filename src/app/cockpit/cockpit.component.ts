import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';

 @Output() serverCreated =  new EventEmitter<object>();
 @Output('bpCreated') blueprintCreated =  new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverName){
    this.serverCreated.emit({type:'server',name:serverName.value,content:this.newServerContent})
  }
  onAddBlueprint(){
    this.blueprintCreated.emit({type:'blueprint',name:this.newServerName,content:this.newServerContent});
  }
}
