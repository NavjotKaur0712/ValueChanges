import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value;

  reactiveForm: any  = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl()
    })
  })
 
  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit(){
    this.reactiveForm.get('firstname').valueChanges.subscribe(data => {
      this.value = data;
    })
  }
}