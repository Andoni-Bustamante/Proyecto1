import { Component } from '@angular/core';
import { Manhwa } from '../../interfaces/manhwa';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  manhwas: Manhwa[] = [
    {
      id: '1',
      titulo: 'Tower of God',
      capitulo: 550,
      imagenUrl: 'https://play-lh.googleusercontent.com/uPhV1ypZr0gY1C5r2q2bFI7P6NkJwpdlj9FoMbbo9PjYSd5g-5CeY3fnYyAlBT4hZw=w526-h296-rw',
      generos: ['Acción', 'Aventura', 'Fantasía'],
      resumen: 'Un joven llamado Bam entra a una torre misteriosa para encontrar a su amiga perdida.',
    },
    {
      id: '2',
      titulo: 'Solo Leveling',
      capitulo: 179,
      imagenUrl: 'https://i.blogs.es/2b941f/solo-leveling/500_333.jpeg',
      generos: ['Acción', 'Fantasía', 'Sobrenatural'],
      resumen: 'Un cazador débil se convierte en el más fuerte tras obtener un misterioso poder.',
    },
    {
      id: '3',
      titulo: 'The Beginning After the End',
      capitulo: 150,
      imagenUrl: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/10/the-beginning-after-the-end-arthur-leywin-and-sylphy.jpg',
      generos: ['Fantasía', 'Aventura', 'Drama'],
      resumen: 'Un rey reencarna en un mundo mágico y busca redimirse de su vida pasada.',
    },
  ];
}
