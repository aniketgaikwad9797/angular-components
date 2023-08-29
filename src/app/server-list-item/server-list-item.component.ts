import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list-item',
  templateUrl: './server-list-item.component.html',
  styleUrls: ['./server-list-item.component.css'],
})
export class ServerListItemComponent implements OnInit {
  @Input() serverItem: { name: string; description : string; type: string };
  constructor() {}

  ngOnInit(): void {}
}
