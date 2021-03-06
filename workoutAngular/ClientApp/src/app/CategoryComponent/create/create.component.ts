import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { category } from '../Category';
import { EventEmitter } from 'protractor';
import { get } from 'https';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class CreateComponent implements OnInit {

  frmCat: FormGroup;
  @Output() categoryAdded = new EventEmitter<string>();
  constructor(private fb: FormBuilder, private service: WorkoutService){ }
  ngOnInit() {
    this.frmCat = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }
    get f(){
      return this.frmCat.controls;
    }
    saveForm(frm: NgForm){
      if (frm.valid) {
        let cat: category = new category(frm.value.id, frm.value.name);
        this.service.save(cat).subscribe(
          (data) => alert('Added'),
          (erro) => alert('Error processing request')
        );

      }
    }
  }

