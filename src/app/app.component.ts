import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
     
  /*course2= COURSES[2];
  course3= COURSES[3]; */
  
  /* @ViewChild('cardRef1') //o puede usarse el nombre deo componente CourseCardComponent
  card1: CourseCardComponent */

  /* @ViewChild('cardRef2') //o puede usarse el nombre deo componente CourseCardComponent
  card2: CourseCardComponent */

  /* 

    onCardClicked(){
    console.log("App Component - click on card ....");
  } */
  @ViewChild('cardRef1')
  containerDiv: ElementRef;

  onCourseViewed(): void{
    console.log("App Component - click event en nivel superior ....");
  }

  onCourseSelectedEmit(course:Course){
    console.log("receiving in OnCourseSelectedEmit....", course);
  }

  onCourseSelected(course:Course){
    console.log("container....", this.containerDiv);
  }
  
}
