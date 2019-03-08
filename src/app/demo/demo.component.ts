import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  dangerousVideoUrl: string;
  videoUrl: SafeResourceUrl;
  @Input() demoToPlay:string;

  demoUrl={
    'auto-shift':'https://www.youtube.com/embed/q6v8HQtlfus?rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1',
    'book-conf':'https://www.youtube.com/embed/7ygbT22pV6c?rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1',
    'easy-source':'https://www.youtube.com/embed/x1uVlIx_1HQ?rel=0&modestbranding=1&autohide=1&showinfo=0&autoplay=1'
  }

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    // this.updateVideoUrl('PUBnlbjZFAI');
  }
  
  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    console.log('demoToPlay', this.demoToPlay);
    console.log('demo url', this.demoUrl[this.demoToPlay]);
    console.log('safe url', this.videoUrl);
  }
  
  ngOnInit() {
    console.log('demo compo', this.demoToPlay);
  }
  
  getUrlForDemo(){
    this.dangerousVideoUrl = this.demoUrl[this.demoToPlay] + 'PUBnlbjZFAI';
    this.videoUrl =
    this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
    return this.videoUrl;
  }

}
