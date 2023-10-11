import { Injectable } from "@angular/core";
import { emptyForm } from "../constants/empty-form";
import { ValidationData } from "../interfaces/validation-data";

@Injectable({
    providedIn: 'root'
})
export class FormService {
    
    private formData = emptyForm;

    setForm(data: ValidationData) {
        this.formData = data;
    }

    getFormData() {
        return this.formData;
    }

};