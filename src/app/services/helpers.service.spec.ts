import { HelpersService } from "./helpers.service";

describe('HelprsService', () => {
  let service: HelpersService;
  beforeEach(() => {
    service = new HelpersService();
  })
  it('stringToDate should return a date type value', () => {
    
    const value = "2023-10-12";
    const resp = new Date(2023, 9, 12);
    expect(service.stringToDate(value)).toEqual(resp);
  });
  it('stringPlusOneYear should add one year to a string date', () => {
    const inputDate = '2023-10-11';
    const result = service.stringPlusOneYear(inputDate);
    expect(result).toBe('2024-10-11');
  });
  it('stringToDatePlusOneYear should convert a string to a date and add one year', () => {
    const inputDate = '2023-10-11';
    const output = new Date(2024, 9, 11);
    const result = service.stringToDatePlusOneYear(inputDate);
    expect(result instanceof Date).toBe(true);
    expect(result.toISOString()).toBe(output.toISOString());
  });
  it('isoToYYYYMMDD should convert an ISO date string to YYYY-MM-DD format', () => {
    const isoDate = '2023-10-11T12:34:56.789Z';
    const result = service.isoToYYYYMMDD(isoDate);
    expect(result).toBe('2023-10-11');
  });
})