import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.styl']
})
export class VideoStreamComponent implements OnInit {
  public video;
  @ViewChild('webCamVideo') webCamVideoRef: ElementRef;
  constructor() { }

  ngOnInit() {
    this.video = this.webCamVideoRef.nativeElement;
  }

  webCam() {
    navigator.mediaDevices.getUserMedia({
      video: true
    }).then((stream) => {
      this.video.srcObject = stream;
    })
  }

  start() {
    this.webCam()
  }

  stop() {
    this.video.srcObject.getTracks()[0].stop();
  }
}
