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
      imagenUrl: 'https://via.placeholder.com/150',
      generos: ['Acción', 'Aventura', 'Fantasía'],
      resumen: 'Un joven llamado Bam entra a una torre misteriosa para encontrar a su amiga perdida.',
    },
    {
      id: '2',
      titulo: 'Solo Leveling',
      capitulo: 179,
      imagenUrl: 'https://via.placeholder.com/150',
      generos: ['Acción', 'Fantasía', 'Sobrenatural'],
      resumen: 'Un cazador débil se convierte en el más fuerte tras obtener un misterioso poder.',
    },
    {
      id: '3',
      titulo: 'The Beginning After the End',
      capitulo: 150,
      imagenUrl: 'https://via.placeholder.com/150',
      generos: ['Fantasía', 'Aventura', 'Drama'],
      resumen: 'Un rey reencarna en un mundo mágico y busca redimirse de su vida pasada.',
    },
  ];
}
