import { Component, inject } from '@angular/core';
import { CourseService } from './course.service';
import { state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
}) 

export class AppComponent {
  //variableName:datatype=value;
   courseId:string='angular-20'
   classEnrollmentprise:number=21;
   iscourseavailable:boolean=false;
   //courseService = inject(CourseService);
  student:any={
    firstName:'kavya',
    lastName:'reddy',
    age:19,
    isInternationStudent:true,
    studentAddress:{
    doorNO:48/248,
      street:'ramvarapadu',
      city:'vijayawada',
      state:'andhraPradesh',
    },
    LocalGardiyanAddress:{
      doorNO:48/248,
      street:'ramvarapadu',
      city:'vijayawada',
      state:'andhraPradesh',
    }

    }
   constructor(private courservic: CourseService){
this.getdownvalues()
 }
 selectCourse(){
  console.log('working....');
  console.log(this.student.firstName);
  console.log(this.student.address);
  
  //this.courseService.getdataFromAPI();
 }

  getStudentDetails() {
    console.log('stu function called...');
     }

searchCourseById(course:number){
console.log('student information.....');
}

getdownvalues(){
// this will get drop down from API
}
customer:any={
  firstName:'kavya',
  lastName:'reddy',
  cid:'amx230',
  cardInfo:{
    number:'10010 1001 1001 1001',
    cvv:235,
    cardType:'visa',
    isprimary:true,
    expireyDate:'2/27'
  },
products:[
  {prId:'xb1010', 
    prName:'xb0x-5',
    deliveredAddress:{
      doorNo:40/280,
      city:'vijayawada',
      street:'ramvarapadu',
      state:'andhraPradesh',
    }
},
 { prId:'ps1010', 
  prName:'platStation-5',
  deliveredAddress:{
    doorNo:40/280,
    city:'bbhr',
    street:'kurdha',
    state:'odisha',
  }

 },
]
     
}


checkCourseAvailable(){
  console.log('checking available');
}
///checkCaseStatus(){
  //console.log('testing');
  //this.courseService.getDataFromAPI()
}



