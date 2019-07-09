import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './product-alerts.component.html',
    styleUrls: ['./product-alerts.component.scss']
})
export class ProductAlertComponent implements OnInit {
    @Input() product;
    @Output() notify = new EventEmitter();
    constructor() {}
    ngOnInit() {

    }
}
