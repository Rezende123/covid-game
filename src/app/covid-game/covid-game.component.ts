import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'covid-game',
  templateUrl: './covid-game.component.html',
  styleUrls: ['./covid-game.component.css']
})
export class CovidGameComponent implements AfterViewInit {

  @ViewChild('infectionArea')
  infectionArea: ElementRef;

  @ViewChild('covid')
  imageCovid: ElementRef;

  constructor() { }

  ngAfterViewInit() {
    this.imageInRandomPosition();
  }

  imageInRandomPosition() {
    const yMax = this.infectionArea.nativeElement.offsetHeight;
    const xMax = this.infectionArea.nativeElement.offsetWidth;

    console.log(`Y: ${yMax}, X: ${xMax}`);
  }

}
