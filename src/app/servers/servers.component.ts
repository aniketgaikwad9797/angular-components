import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  serverList = [
    { name: 'testServer', description: 'testDescription', type: 'server' },
  ];
  //serverType = 'server';
  constructor() {}

  ngOnInit(): void {}

  onServerCreated(serverInstance) {
    console.log(serverInstance);
    this.serverList.push({
      name: serverInstance.srvName,
      description: serverInstance.srvDesc,
      type: serverInstance.srcType,
    });
    console.log(this.serverList)
  }
}
