import {Component, Input, OnInit} from '@angular/core';
import {Import} from '@angular/compiler-cli/src/ngtsc/host';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
    @Input() parentText: string;

    constructor() {
    }

    ngOnInit() {
    }

    setTextFromChild(eventParam) {
        console.log('parent method');
        console.log(eventParam);
        this.parentText = eventParam;
        console.log(this.parentText);
    }
}
