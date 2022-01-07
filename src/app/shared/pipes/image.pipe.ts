import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../models/heroe.model';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(heroe: Heroe): string {
    let image = 'assets/no-image.jpg';
    if (heroe.alt_img !== null && heroe.alt_img !== '') {
      image = `assets/heroes/${heroe.id}.jpg`;
    }
    return image;
  }

}
