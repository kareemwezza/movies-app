import Actor from './actor';

export default interface Movie {
  id?: number;
  movieId: number;
  movieName: string;
  age: number;
  directorName?: string;
  category: string;
  image: string;
  description?: string;
  releasedYear: number;
  rating: string;
  time?: string;
  video?: string;
  actors?: Actor[];
  addedDate?: any;
}
