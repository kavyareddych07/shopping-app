import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getDataFromAPI(){
console.log('to call API')
  }
  
}
