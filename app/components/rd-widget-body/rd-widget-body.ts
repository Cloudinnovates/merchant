import {Component, Input} from '@angular/core';

@Component({
    selector: 'rd-widget-body',
    templateUrl: 'app/components/rd-widget-body/rd-widget-body.html'
})
export class RdWidgetBody {
    @Input()
    loading:boolean;

    @Input()
    classes:string;

    constructor() {
        this.loading = false;
        this.classes = '';
    }
}
