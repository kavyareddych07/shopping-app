import { Component, inject } from '@angular/core';
import { CourseService } from './course.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
}) 

export class AppComponent {
  //variableName:datatype=value;
   courseId:string='angular-20'
   classEnrollmentprise:number=21;
   iscourseavailable:boolean=false;
   courseService = inject(CourseService);
   stuD: any = {
    collegeInfo: 'hello',
    collegeInformation: ''
   }
   testData: any = [
    {name:'test1',ID:'1'},
    {name:'test2',ID:'2'},
    {name:'test3',ID:'3'},
  ];

  movieDetails: any = {
    movieName: 'baby',
    maleLead: 'akshay kumar',
    femaleLead: 'taapsee',
    isThisMovieAvailable: true,
    movieRating: 4.5,
  };
    
   collegeInfo: any = {
    collegeName: 'cv raman',
    noOfStudents: 2000,
    isStillEnrolling: true,
    coursesAvailable: ['Electrical', 'mech', 'Computer Science', 'IT']
   }

   // collegeInfo.coursesAvailable.length -4
   // this.collageInfo.coursesAvailable[2]
  student: any = {
    firstName: 'kavya',
    lastName: 'reddy',
    age: 19,
    isInternationStudent: true,
    studentAddress: {
      doorNO: '48/248 2B',
      street: 'ramvarapadu',
      city: 'vijayawada',
      state: 'andhraPradesh',
    },
    LocalGardiyanAddress: {
      doorNO: '48/248',
      street: 'ramvarapadu',
      city: 'vijayawada',
      state: 'Orissa',
    }
  }
  // this.student.LocalGardiyanAddress.state - Orissa

  customer: any = {
    firstName: 'kavya',
    lastName: 'reddy',
    cid: 'amx230',
    cardInfo: {
      number: '10010 1001 1001 1001',
      cvv: 235,
      cardType: 'visa',
      isprimary: true,
      expireyDate: '2/27'
    },
    products: [
      {
        prId: 'xb1010',
        prName: 'xb0x-5',
        deliveredAddress: {
          doorNo: 40 / 280,
          city: 'vijayawada',
          street: 'ramvarapadu',
          state: 'andhraPradesh',
        }
      },
      {
        prId: 'ps1010',
        prName: 'platStation-5',
        deliveredAddress: {
          doorNo: 40 / 280,
          city: 'bbhr',
          street: 'kurdha',
          state: 'odisha',
        }

      },
    ]

  }

  constructor(private courservic: CourseService) {
    this.getdownvalues()
  }

  Rayban(){
    console.log('working');
    this.collegeInfo.collegeName
   }

  selectCourse() {
    console.log('working....');
    console.log(this.student.firstName);
    console.log(this.student.address);

    //this.courseService.getdataFromAPI();
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

  checkCaseStatus() {
    console.log('testing');
    // this.courseService.getDataFromAPI()
  }

  getCSInfo() {
    console.log(this.collegeInfo.coursesAvailable[2]);
    console.log(this.collegeInfo.coursesAvailable.length);
  }

  getUNIList(){
    console.log('this function is called');
    this.courseService.fetchUniListFromAPI()
  };

  movieDetail() {
    console.log(this. movieDetails.movieRating);
    this.courseService.fetchMovieDetailsFromAPI()
  };
  
  }



