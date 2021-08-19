import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  show = 0;

  reactiveForm = new FormGroup({
    Rate: new FormControl(''),
    Mile: new FormControl(''),
    RateperMile: new FormControl(''),
  })
  value3: any;
  result: number;
  rate: any;
  rateperMile: any;
  mile: any;


  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  // ngOnInit(){
  //   this.reactiveForm.get('firstname').valueChanges.subscribe(data => {
  //     this.value = data;
  //   })
  // }


  ngOnInit() {
    this.reactiveForm.get('Mile').valueChanges
      .subscribe(data2 => {
        //this.value2 = data2;
        //console.log(this.value2);

      })
    this.reactiveForm.get('RateperMile').valueChanges
      .subscribe(data3 => {
        //this.value3= data3;
        //console.log(this.show);
        this.multiply();
      })
    this.reactiveForm.get('Rate').valueChanges
      .subscribe(data1 => {
        // this.value1 = data1;
        //console.log(this.value1);
        this.divide();
      })
  }

  multiply() {
    this.mile = this.reactiveForm.get('Mile').value;
    this.rateperMile = this.reactiveForm.get('RateperMile').value;
    this.show = this.mile * this.rateperMile;
    console.log(this.show);

  }

  divide() {
    this.rate = this.reactiveForm.get('Rate').value;
    this.mile = this.reactiveForm.get('Mile').value;
    this.result = this.rate / this.mile;
    console.log("111", this.result);
  }
}
