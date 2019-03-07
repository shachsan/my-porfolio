import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-container',
  templateUrl: './right-container.component.html',
  styleUrls: ['./right-container.component.css']
})
export class RightContainerComponent implements OnInit {

  @Output() playDemo=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onClickDemo(video:string){
    this.playDemo.emit(video);
  }

}
