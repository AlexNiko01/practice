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
        this.ind = index;
    }
}
