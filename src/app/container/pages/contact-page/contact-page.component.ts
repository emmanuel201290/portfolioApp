import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styles: [
  ]
})
export class ContactPageComponent implements OnInit {

  public flagSave: boolean = false;

  public myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    subject: ['',[Validators.required, Validators.minLength(3)]],
    message: ['']
  })

  constructor(
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
    ){}
   ngOnInit(): void {
      let v_to = document.documentElement.style.getPropertyValue('--h-to');
    
      if(v_to === '')
         v_to = '30em';
      document.documentElement.style.setProperty('--h-to','35em')
      document.documentElement.style.setProperty('--h-from', v_to)
   }

   isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
   }

   getFieldError(field: string): string | null{
    if(!this.myForm.controls[field]) return null;

    const errors = this.myForm.controls[field].errors || {}

    console.log(errors)

    for( const key of Object.keys(errors)){
      switch( key ) {
       case 'required':
             return 'This field is required'
       case 'minlength':
             return  `Min ${errors['minlength'].requiredLength} caracters.  `
       case 'email':
              return  `Email no valid.  `
      }
    }

    return null
 }

   onSave():void {

     if(this.myForm.invalid){
       this.showSnackbar('Message has not been sent','Wrong');
       return;
     }
     console.log(this.myForm.value);
     this.showSnackbar('Saved','Ok');
     this.myForm.reset();
   }

   showSnackbar(message: string, title: string): void {
    this.snackbar.open(message, title,{
      duration: 2500
    })
}

}
