import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  // @ViewChild('parag') parag: ElementRef;
  serverCreated = false;

  constructor() {
    setTimeout(() => { this.allowNewServers = true; }, 5000);
  }

  ngOnInit() {

  }

  // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit() {
  //   // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //   // Add 'implements AfterViewInit' to the class.
  //   console.log(this.parag.nativeElement);
  // }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
