import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'another-card',
  templateUrl: './another-card.component.html',
  styleUrls: ['./another-card.component.css']
})
export class AnotherCardComponent implements OnInit {
  
  //--------------------
  // Parameters
  //---------------------
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected1= new EventEmitter<Course>()
  
  @Output('courseSelected2')
  courseSelectedEmitter= new EventEmitter<Course>()
  // marked this custom event to emit the object to app component

  constructor() { }

  ngOnInit(): void {
    
  }
  //--------------------
  // Methods
  //---------------------
  onCourseViewed (){
    // when user pick up the  View course button trigger the custom event

    console.log("button was clicked...sending",this.course)
    //this.courseSelected1.emit(this.course);
    this.courseSelectedEmitter.emit(this.course);
  }

}
