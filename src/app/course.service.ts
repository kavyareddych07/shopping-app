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

  data = [
    {
      "state-province": null,
      "alpha_two_code": "GB",
      "name": "West Herts College",
      "domains": [
        "student.westherts.ac.uk",
        "westherts.ac.uk"
      ],
      "web_pages": [
        "https://westherts.ac.uk"
      ],
      "country": "United Kingdom"
    },
    {
      "state-province": null,
      "alpha_two_code": "GB",
      "name": "Royal Holloway University of London",
      "domains": [
        "rhul.ac.uk"
      ],
      "web_pages": [
        "https://rhul.ac.uk"
      ],
      "country": "United Kingdom"
    },

  ]
}


