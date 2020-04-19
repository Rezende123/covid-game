import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

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

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.imageInRandomPosition();
  }

  imageInRandomPosition() {
    const yMax = this.infectionArea.nativeElement.offsetHeight;
    const xMax = this.infectionArea.nativeElement.offsetWidth;
    const imageHeight = this.imageCovid.nativeElement.offsetHeight;
    const imageWidth = this.imageCovid.nativeElement.offsetWidth;

    const positionX = this.randomInt(imageWidth, xMax - imageWidth);
    const positionY = this.randomInt(imageHeight, yMax - imageHeight);

    this.renderer.setStyle(this.imageCovid.nativeElement, 'left', `${positionX}px`);
    this.renderer.setStyle(this.imageCovid.nativeElement, 'top', `${positionY}px`);
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
}
