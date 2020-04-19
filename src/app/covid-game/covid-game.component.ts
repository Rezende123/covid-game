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
  lastDistance: number;
  isFound = false;

  constructor(private renderer: Renderer2) {
    this.audio = new Audio();
  }

  ngAfterViewInit() {
    this.imageInRandomPosition();
    this.playAudio('TickTock');
    this.hideImage();
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

    this.position.x += imageWidth / 2;
    this.position.y += imageHeight / 2;
  }

  hideImage() {
    if (this.isFound) {
      this.renderer.setStyle(this.imageCovid.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.imageCovid.nativeElement, 'display', 'none');
    }
  }

  randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }

  mousePosition(mouse) {
    const distance = this.calculateDistance(mouse, this.position);

    this.detectProximity(distance);
  }

  detectProximity(distance: number) {
    if (distance < 50) {
      if (!this.isFound) {
        this.audio.pause();
        this.playAudio('Panic', 1, false);

        this.isFound = true;
        this.hideImage();
      }
    } else
    if (distance < 100) {
      this.audio.volume = 1;
    } else
    if (distance < 150) {
      this.audio.volume = 0.8;
    } else
    if (distance < 200) {
      this.audio.volume = 0.6;
    } else
    if (distance < 250) {
      this.audio.volume = 0.4;
    } else {
      this.audio.volume = 0.2;
    }

    this.lastDistance = distance;
  }

  calculateDistance(pointA, pointB) {
    let xMax = 0;
    let yMax = 0;
    let xMin = 0;
    let yMin = 0;

    if (pointA.x > pointB.x) {
      xMax = pointA.x;
      xMin = pointB.x;
    } else {
      xMax = pointB.x;
      xMin = pointA.x;
    }

    if (pointA.y > pointB.y) {
      yMax = pointA.y;
      yMin = pointB.y;
    } else {
      yMax = pointB.y;
      yMin = pointA.y;
    }

    const widthTriangle = xMax - xMin;
    const heightTriangle = yMax - yMin;

    const hypotenuse = Math.sqrt( Math.pow(widthTriangle, 2) + Math.pow(heightTriangle, 2) );

    return hypotenuse;
  }

  playAudio(nameAudio: 'Panic' | 'TickTock', volume = 0.2, loop = true){
    this.audio.src = `../../assets/musics/${nameAudio}.mp3`;
    this.audio.load();
    this.audio.play();
    this.audio.loop = loop;
    this.audio.volume = volume;
  }
}
