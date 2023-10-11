import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, finalize } from "rxjs";
import { RawData } from "../interfaces/raw-data";
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';
  private headers = new HttpHeaders({ 'authorId': 349 });
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  private dataSubject = new BehaviorSubject<RawData[]>([]);
  data$ = this.dataSubject.asObservable();

  setData(data: RawData[]) {
    this.dataSubject.next(data);
  }
  
  constructor(
    private http: HttpClient,
  ) {}

  get() {
    this.loadingSubject.next(true);
    return this.http.get<RawData[]>(this.apiUrl, { headers: this.headers }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  add(item: RawData) {
    this.loadingSubject.next(true);
    return this.http.post(this.apiUrl, item, { headers: this.headers }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  update(item: RawData) {
    this.loadingSubject.next(true);
    return this.http.put(`${this.apiUrl}?id=${item.id}`, item, { headers: this.headers }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  delete(id: string) {
    this.loadingSubject.next(true);
    return this.http.delete(`${this.apiUrl}?id=${id}`, { headers: this.headers }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }

  validate(id: string) {
    this.loadingSubject.next(true);
    return this.http.get(`${this.apiUrl}/verification?id=${id}`, { headers: this.headers }).pipe(
      finalize(() => {
        this.loadingSubject.next(false);
      })
    );
  }
}
