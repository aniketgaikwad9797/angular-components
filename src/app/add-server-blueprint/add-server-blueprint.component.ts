import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-server-blueprint',
  templateUrl: './add-server-blueprint.component.html',
  styleUrls: ['./add-server-blueprint.component.css'],
})
export class AddServerBlueprintComponent implements OnInit {
  //serverName = '';
  //serverDesc = '';
  @Output() serverCreated = new EventEmitter<{}>();
  @ViewChild('serverNameInput') serverNameInputFromTemplate: ElementRef;
  @ViewChild('serverDescriptionInput')
  serverDescriptionInputFromTemplate: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  onAddServer(
    serverType: string,
    // serverName: HTMLInputElement,
    // sreverDescription: HTMLInputElement
  ) {
    // this.serverList.push({
    //   name: this.serverName,
    //   description: this.serverDesc,
    //   type: serverType,
    // });
    this.serverCreated.emit({
      srvName: this.serverNameInputFromTemplate.nativeElement.value,
      srvDesc: this.serverDescriptionInputFromTemplate.nativeElement.value,
      srcType: serverType,
    });
  }
}
