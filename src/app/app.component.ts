import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses= COURSES;
  course: any;
  
  /* @ViewChild('cardRef1') //o puede usarse el nombre deo componente CourseCardComponent
  card1: CourseCardComponent */

  /* @ViewChild('cardRef2') //o puede usarse el nombre deo componente CourseCardComponent
  card2: CourseCardComponent */

  @ViewChild('container')
  containerDiv: ElementRef;

    onCardClicked(){
    console.log("App Component - click on card ....");
  }

  onCourseSelected(course:Course){
    console.log("container....", this.containerDiv);
  }

}
