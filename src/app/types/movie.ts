import Actor from './actor';

export default interface Movie {
  id: number;
  name: string;
  director: string;
  time: string;
  year: string;
  category: string;
  image: string;
  rating: string;
  description: string;
  video: string;
  actors: Actor[];
}
