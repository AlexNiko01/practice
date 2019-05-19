import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImagesService {

    constructor() {
    }

    public images: string[] = [
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/2NEzIdBAgm4kSYXF4OH86qs3a0u.jpg',
        'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fMnMonAyK3nzp1P1odIFzYoSvYe.jpg'
    ];

    public getImages() {
        return this.images;
    }

}
