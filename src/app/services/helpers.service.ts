import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HelpersService {

    stringToDate(value: string) {
        let dateComponents = value.split('-');
        let year = parseInt(dateComponents[0], 10);
        let month = parseInt(dateComponents[1], 10) - 1;
        let day = parseInt(dateComponents[2], 10);
        return new Date(year, month, day);
    }
    stringPlusOneYear(value: string) {
        const splitedValue = value.split('-');
        const yearPlusOne = parseInt(splitedValue[0], 10) + 1;
        return `${yearPlusOne}-${splitedValue[1]}-${splitedValue[2]}`
    }
    stringToDatePlusOneYear(value: string) {
        let dateComponents = value.split('-');
        let year = parseInt(dateComponents[0], 10);
        let month = parseInt(dateComponents[1], 10) - 1;
        let day = parseInt(dateComponents[2], 10);
        const newDate =  new Date(year, month, day);
        newDate.setFullYear(year + 1);
        return newDate;
    }

    isoToYYYYMMDD(value: string) {
        if (!value) {
            return '';
          }
          const parts = value.split('T')[0].split('-');
          const year = parts[0];
          const month = parts[1];
          const day = parts[2];
          return `${year}-${month}-${day}`;
    }
};