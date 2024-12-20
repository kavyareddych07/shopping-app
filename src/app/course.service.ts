import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getDataFromAPI() {
    console.log('to call API')
  }
  
  fetchUniListFromAPI() {
    console.log('to reach API for UNI Data')
  }

  fetchMovieDetailsFromAPI(){
    console.log('to reach API from Ratings')
  }
}
