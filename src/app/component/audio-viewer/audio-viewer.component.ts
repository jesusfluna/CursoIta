import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-viewer',
  templateUrl: './audio-viewer.component.html',
  styleUrls: ['./audio-viewer.component.css']
})
export class AudioViewerComponent implements OnInit {
  @Input() ruta!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
