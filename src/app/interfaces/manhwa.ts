export interface Manhwa {
    id?: string; // ID de Firestore
    titulo: string;
    capitulo: number;
    imagenUrl: string;
    generos: string[];
    resumen: string;
  }