import { Component } from '@angular/core';

@Component({
    selector: 'pm-quotes',
    templateUrl: './quote-list.component.html'
})

export class QuoteListComponent {
    pageTitle: string = "Misspelled but Profound Thoughts...";
    quotes: any[];
}