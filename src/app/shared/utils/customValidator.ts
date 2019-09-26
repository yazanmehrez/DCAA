import { FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import * as moment from 'moment';
import {DateTime} from 'luxon';
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

export function CannotContainSpace(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        // set error on matchingControl if validation fails
        if (control.value.indexOf(' ') > -1) {
            control.setErrors({ cannotContainSpace: true });
        } else {
            control.setErrors(null);
        }

    };
}

export class CustomValidation {

    public static PasswordRule(control: AbstractControl) {
        const password = control.value; // to get value in input tag
        const pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}');
        if (!pattern.test(password)) {
            return { passwordRule: true };
        } else {
            return null;
        }
    }

   public static cannotContainSpace(control: AbstractControl): ValidationErrors {
    // set error on matchingControl if validation fails
    if (control.value.indexOf(' ') > -1) {
        return { cannotContainSpace: true };
    } else {
        return null;
    }

   }

   public static validDate(control: AbstractControl): ValidationErrors {
    // set error on matchingControl if validation fails
    if (!control.value) {
        return null;
    }


    const date = moment(control.value);
    const isoDatetime = DateTime.fromISO(date.toISOString());
    // console.log(isoDatetime.zoneName, moment(isoDatetime.setZone('Asia/Dubai').toISO()));

    if (!date.isValid()) {
        return { validDate: true };
    } else {
        return null;
    }

   }

   public static todayAndPast(control: AbstractControl): ValidationErrors {
    // set error on matchingControl if validation fails
    if (!control.value) {
        return null;
    }


    const date = moment(control.value);

    if (date.isValid()) {
        const now = moment(new Date());
        const duration = moment.duration(date.diff(now));
        if (duration.asSeconds() > 0) {
            console.log('Future');
            // Oops...In the future
            return { todayAndPast: true };
        } else {
            return null;
        }
    }
    return null;
   }



   public static underAge(control: AbstractControl): ValidationErrors {
    // set error on matchingControl if validation fails
    if (!control.value) {
        return null;
    }


    const date = moment(control.value);

    if (date.isValid()) {
        const now = moment(new Date());
        const duration = moment.duration(now.diff(date));
        if (duration.asYears() > 12) {
            // Oops...In the past
            return { underAge: true };
        } else {
            return null;
        }
    }
    return null;
   }

}
