
import { Component, OnInit } from '@angular/core';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { WorkoutService } from '../workout.service';
import { category } from '../Category';

@Component({
  selector: 'app-view-all-category',
  templateUrl: './view-all-category.component.html',
  styleUrls: ['./view-all-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  Categories: category[]
  constructor(private service: WorkoutService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (data) => this.Categories = data,
      (error) => console.log(error)
    );
  }

  SaveCategory($event) {
    console.log($event);
    this.service.save(new category(0, $event)).subscribe(
      (data) => alert('Added'),
      (error) => alert("Failed to add")
    );
  }


}

