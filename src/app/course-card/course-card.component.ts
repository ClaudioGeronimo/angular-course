import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  
  //------------------------------------------
  //parameters
  //---------------------
  @Input()
  course:Course

  @Input()
  cardIndex: number;

  @Output('courseSelected')
 courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  //------------------------------------------
  //methods
  //------------------------------------------
  onCourseViewed(){
    console.log("button clicked")
    this.courseEmitter.emit(this.course);
  }
  isVisible(){
    return this.course && this.course.iconUrl;
  }

  cardClasses(){
    if (this.course.category == "BEGINNER"){
      return ['beginner'];
    }
  }

  cardStyle(){
    return {
      'background-image': 'url('+ this.course.iconUrl + ')'
    }
  }

  /*  
    return{
        'beginer': this.course.category == "BEGINNER",
        'course-card': true
    } */
}
