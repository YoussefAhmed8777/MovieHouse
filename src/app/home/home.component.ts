import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { error } from 'console';
import { Movie } from '../movie';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  movieList!:Movie[]
  constructor(private movies:MoviesService){}
  imgBaseUrl:string="https://image.tmdb.org/t/p/original"
  ngOnInit(): void {
    this.getMovies()
  }
  getMovies(){
    this.movies.getMovies().subscribe({
      next:(res)=>{
        // console.log(res)
        this.movieList = res.results
        console.log(this.movieList)
      },error:(error)=>{
        console.log(error)
      }
    })
  }
}
