import {Component, OnInit} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector: 'app-change-color',
    templateUrl: './change-color.component.html',
    styleUrls: ['./change-color.component.scss']
})
export class ChangeColorComponent implements OnInit {
    isPressed: boolean = false;

    changeStatus() {
        this.isPressed=!this.isPressed;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
