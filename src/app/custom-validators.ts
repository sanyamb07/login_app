import { FormControl } from '@angular/forms';

export class CustomValidators{
    static validateEmail(formControl: FormControl){
        var validEmail = new RegExp('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
        if(!validEmail.test(formControl.value))
            return {"email": true};
        return null;
    }
}