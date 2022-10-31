import { Component, OnInit, Input } from '@angular/core';
import PSPDFKit from 'pspdfkit';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {
  //@Input() pdfSource!:string = "/assets/document.pdf"
  @Input() ruta!:string

  constructor() { }

  ngOnInit(): void {
    PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: this.ruta,
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;
		});
	}
}
