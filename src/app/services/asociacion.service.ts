import { Injectable } from '@angular/core';
import {  TipoAsociacion} from '../models/TipoAsociacion';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable, of , throwError} from 'rxjs';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Asociacion } from '../models/asociacion';


@Injectable({
  providedIn: 'root'
})
export class AsociacionService {
  private httpHeaders = new HttpHeaders({'Content-Tipe':'application/json'});
  private tipo_asociacion = 'http://localhost:8080/tipo';
  private asociacionurl ='http://localhost:8080/asoc';

  constructor(private http: HttpClient , private router:Router) { }
 
  
 
  getTipoAsociaciones():Observable<any>{
    return this.http.get(this.tipo_asociacion+'/all').pipe(
      catchError(e =>{
        this.router.navigate(['/registrar']);
        console.error(e.error.mensaje);
        Swal.fire('Error al listar', e.error.mensaje, 'error');
        return throwError(e);
      })
    )
  }
  gettipoasociacion():Observable<Object[]>{
    return this.http.get<Object[]>(this.tipo_asociacion+'/all'); 
  }
  addasociacion(asociacion:Asociacion): Observable<any>{
    return this.http.post<Asociacion>(this.asociacionurl+'/add', asociacion, {headers:this.httpHeaders});
  }
  deleteAsociacion(id:number): Observable<any>{
    return this.http.delete<any>(this.asociacionurl+'/delete/'+id,{headers:this.httpHeaders});
  }
  getAsociacion(): Observable<Object> {
    return this.http.get<Object>(this.asociacionurl+ '/all');
    
  }
}
