import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { FileSystem } from 'src/app/shared/models/fileSystem';


@Component({
  selector: 'app-img-comp',
  templateUrl: './img-comp.component.html',
  styleUrls: ['./img-comp.component.scss']
})
export class ImgCompComponent implements OnInit {

  @Input() set src(value: any) {
    this.fileSystems = JSON.parse(value);
  }
  @Input() myurl: string = new ConfigService().getApiURI();
  @Input() imgClass = 'img-fluid img-thumbnail medium m-lr-10';
  fileSystems: FileSystem[] = [];
  constructor() { }



  rewriteUrl(url: string): string {
    return `${this.myurl}/${url}`;
  }

  ngOnInit() {
  }

}
