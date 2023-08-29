import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-server-blueprint',
  templateUrl: './add-server-blueprint.component.html',
  styleUrls: ['./add-server-blueprint.component.css'],
})
export class AddServerBlueprintComponent implements OnInit {
  serverName = '';
  serverDesc = '';
  @Output() serverCreated = new EventEmitter<{}>();
  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverType: string) {
    // this.serverList.push({
    //   name: this.serverName,
    //   description: this.serverDesc,
    //   type: serverType,
    // });
    this.serverCreated.emit({
      srvName: this.serverName,
      srvDesc: this.serverDesc,
      srcType: serverType
    });
  }
}
