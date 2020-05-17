import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createContactForm();
  }
  ngOnInit(): void {

  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      message: [''],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
      }),
    });
  }

  onSubmit() {
      console.log('Your form data : ', this.contactForm.value );
  }
}


