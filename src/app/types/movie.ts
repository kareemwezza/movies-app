import Actor from './actor';

export default interface Movie {
  movieId: number;
  movieName: string;
  directorName?: string;
  category: string;
  image: string;
  description?: string;
  year: string;
  rating: string;
  time?: string;
  video?: string;
  actors?: Actor[];
}
