import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html',
  styleUrls: ['./nabvar.component.css']
})
export class NabvarComponent implements OnInit {
  @Output() navLinkSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onNavLinkClickHandler(linkClicked:string){
    this.navLinkSelected.emit(linkClicked);
  }

}
