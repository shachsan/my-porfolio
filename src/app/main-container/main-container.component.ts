import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit, OnChanges{
  playDemo='';
  @Input() navClicked:boolean;
  
  
  constructor() { 
  }

  ngOnInit() {
    console.log('onInit triggered');
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('onChange', changes);
    if(changes.navClicked.currentValue!==changes.navClicked.previousValue){
      this.playDemo='';
    }
  }

  onPlayDemo(demoVideo:string){
    this.playDemo=demoVideo;
  }

}
