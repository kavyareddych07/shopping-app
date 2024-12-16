import { Component, Injectable } from '@angular/core';
import { injuct } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  getDataFromAPI(){
console.log('to call API')
  }
  checkcasestatusAvailability(){
    console.log('test API')
      }
      checkCaseStatus(){
        console.log('checking availability')
      }
}
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  courseId: string = 'angular-20';
  classEnrollmentprise: number = 21;
  iscourseavailable: boolean = false;
  courseService = injuct(this.courseService);


  constructor() {
    this.getdownvalues();
  }

  getStudentDetails() {
    console.log('stu function called...');
  }

  searchCourseById(course: number) {
    console.log('student information.....');
  }

  getdownvalues() {
    // this will get drop down from API
  }
  checkCourseAvailable() {
    console.log('checking available');
  }

}

