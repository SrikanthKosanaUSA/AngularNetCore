import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'] })


export class RatingComponent implements OnInit {
  ratingForm: FormGroup;
  submitted = false;
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ratingForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      comments: [''],
      selectedValue: ['']
    });
  }

  get f() { return this.ratingForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onSubmit() {
    this.submitted = true;

    if (this.ratingForm.invalid) {
      return;
    }

    alert('Success :- \n\n' + JSON.stringify(this.ratingForm.value, null, 4));

  }

  onReset() {
    this.submitted = false;
    this.ratingForm.reset();

  }

  onClear() {
    this.submitted = false;
  }

  countStar(star) {
    this.selectedValue = star;
    console.log('Value of star', star);
    return this.selectedValue;
  }
}
