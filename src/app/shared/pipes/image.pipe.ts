import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    console.log(heroe)
    if (!heroe.id && !heroe.alt_img) {
      return 'assets/no-image.png';
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
        return`assets/heroes/${heroe.id}.jpg`;

    }
  }

}
