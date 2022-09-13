import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Movie from '../../types/movie'
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-filmInfo',
  templateUrl: './filmInfo.component.html',
  styleUrls: ['./filmInfo.component.scss']
})
export class FilmInfoComponent implements OnInit {

  movieId;
  filmData: Movie;

  items: MenuItem[] = [];

  constructor(private route: ActivatedRoute) {
    this.movieId = this.route.snapshot.paramMap.get('id');


    this.filmData = {
      movieId: 5,
      movieName: "Spider man No Way Home",
      category: "Action, Adventure",
      image: "/../../../assets/images/spiderman.jpg",
      year: '2022',
      rating: '4.5'

    }
  }



  ngOnInit() {
    this.items = [
      { label: 'Categories' },
      { label: 'Sports' },
      { label: 'Football' },
      { label: 'Countries' },
      { label: 'Spain' },
      { label: 'F.C. Barcelona' },
      { label: 'Squad' },
      {
        label: 'Lionel Messi',
        url: 'https://en.wikipedia.org/wiki/Lionel_Messi'
      }
    ];
  }

}
