import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      fullName: ['', [Validators.required,Validators.minLength(5)]],
      email: ['', [Validators.required,Validators.email]],
      message: ['', [Validators.required,Validators.maxLength(100)]],
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


