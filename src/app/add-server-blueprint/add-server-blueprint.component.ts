import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-server-blueprint',
  templateUrl: './add-server-blueprint.component.html',
  styleUrls: ['./add-server-blueprint.component.css']
})
export class AddServerBlueprintComponent implements OnInit {
  serverName = '';
  serverDesc = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverType: string) {
    this.serverList.push({
      name: this.serverName,
      description: this.serverDesc,
      type: serverType,
    });
  }

}
