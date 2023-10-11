import { DateFormatPipe } from "./dateToString.pipe"

describe('Date to string pipe', () => {
  it('should return date in format dd/mm/YYYY', () => {
    let pipe = new DateFormatPipe();
    const initDate = "2024-10-19T00:00:00.000+00:00";
    expect(pipe.transform(initDate)).toEqual('19/10/2024');
  }) 
})