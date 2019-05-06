import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss']
})

export class ChildComponent implements OnInit {
    @Output() update = new EventEmitter<string>();

    text = 'text from child component';

    constructor() {
    }

    ngOnInit() {
    }

    sendToParent() {
        this.update.emit(this.text);
    }
}
