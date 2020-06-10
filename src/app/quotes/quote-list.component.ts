import { Component } from '@angular/core';
import { IQuote } from './quote';

@Component({
    selector: 'pm-quotes',
    templateUrl: './quote-list.component.html'
})

export class QuoteListComponent {
    pageTitle: string = "Profound Thoughts...";
    disclaimer: string = "All deliberate punctuation and spelling errors have been 'fixed' for ease of reading";
    svgWidth: number = 50;
    svgMargin: number = 10;
    showImage: boolean = false;
    quoteFilter: string = 'find me...';
    quotes: IQuote[] = [
        {
            "id": 1,
            "character": "bear",
            "image": "assets/img/paw-claws-duotone.svg",
            "quote": "What if bees are misunderstood? What if bees don't actually want to sting you?",
            "topic": "Misconceptions"
        },
        {
            "id": 2,
            "character": "narrator",
            "image": "assets/img/book-heart-regular.svg",
            "quote": "When two aliens find each other in a strange place, it feels a little more like home.",
            "topic": "Friendship"
        },
        {
            "id": 3,
            "character": "owl",
            "image": "assets/img/earlybirds-brands.svg",
            "quote": "I feel like one day I'll meet another owl and they'll take a look at me and say, 'Oh, somebody made a mistake; you're not supposed to be an owl at all.",
            "topic": "Imposter Syndrome"
        },
        {
            "id": 4,
            "character": "tree",
            "image": "assets/img/tree-alt-duotone.svg",
            "quote": "A friend is anyone or anything who shares a life with you that you would never be able to experience without them.",
            "topic": "Friendship"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
        console.log(this.showImage);
    };
}