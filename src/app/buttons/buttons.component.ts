import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../images.service";

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

    public images: string[];
    public ind: number;

    constructor(public imagesService: ImagesService) {
    }

    ngOnInit() {
        this.images = this.getImages();
    }

    public getImages() {
        return this.imagesService.getImages();
    }

    public setShowing(index) {
        console.log(index);
        switch (index) {
            case 0:
                this.ind = 0;
                console.log(this.ind);
                break;
            case 1:
                this.ind = 1;
                console.log(this.ind);
                break;
            case 2:
                this.ind = 2;
                console.log(this.ind);
                break
        }
    }
}
