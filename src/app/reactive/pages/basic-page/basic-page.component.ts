import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'Producto1',
  price: 122,
  inStorage: 13
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  constructor( private fb: FormBuilder){}


  ngOnInit(): void {
    // this.myForm.reset(rtx5090);
  }

  // public myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),  //(valor por defecto, validaciones sincronas, validaciones asincronas)
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], [])
  // })

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  isValidField( field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched
  }

  getFieldError(field: string): string | null {
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido'
        case 'minlength':
          return `Este campo ha de contener un mínimo de ${errors['minlength'].requiredLength} caracteres`
        case 'min':
          return `El valor de este campo debe ser mayor a ${errors['min'].requiredMin}`

      }
    }
    return null;
  }

  onSave(): void {
    if( this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log( this.myForm.value);

    this.myForm.reset({price: 0, inStorage: 0});
  }



}
