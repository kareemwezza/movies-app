import Movie from "./movie";

export default interface Actor {
  actorId: number;
  actorName: string;
  actorImagePath: string;
  movies:Movie[];
}
