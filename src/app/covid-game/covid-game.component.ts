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

  position = {x: 0, y: 0};
  audio: HTMLAudioElement;

  constructor(private renderer: Renderer2) { 
    this.audio = new Audio();
  }

  ngAfterViewInit() {
    this.imageInRandomPosition();
    this.playAudio('Panic');
  }

  imageInRandomPosition() {
    const yMax = this.infectionArea.nativeElement.offsetHeight;
    const xMax = this.infectionArea.nativeElement.offsetWidth;
    const imageHeight = this.imageCovid.nativeElement.offsetHeight;
    const imageWidth = this.imageCovid.nativeElement.offsetWidth;

    this.position.x = this.randomInt(imageWidth, xMax - imageWidth);
    this.position.y = this.randomInt(imageHeight, yMax - imageHeight);

    this.renderer.setStyle(this.imageCovid.nativeElement, 'left', `${this.position.x}px`);
    this.renderer.setStyle(this.imageCovid.nativeElement, 'top', `${this.position.y}px`);
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  mousePosition(mouse) {
    const distance = this.calculateDistance(mouse, this.position);

    console.log(`Distance: ${distance}`);
  }

  calculateDistance(pointA, pointB) {
    const xMax = (pointA.x > pointB.x) ? pointA.x : pointB.x;
    const yMax = (pointA.y > pointB.y) ? pointA.y : pointB.y;

    const xMin = (pointA.x < pointB.x) ? pointA.x : pointB.x;
    const yMin = (pointA.y < pointB.y) ? pointA.y : pointB.y;

    const widthTriangle = xMax - xMin;
    const heightTriangle = yMax - yMin;

    const tangent = Math.sqrt( Math.pow(widthTriangle, 2) + Math.pow(heightTriangle, 2) );

    return tangent;
  }

  playAudio(nameAudio: 'Panic' | 'TickTock'){
    this.audio.src = `../../assets/musics/${nameAudio}.mp3`;
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
    this.audio.volume = 0.2;
  }
}
