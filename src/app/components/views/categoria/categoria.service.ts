import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Categoria}  from "./categoria.model";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CategoriaService{
    constructor(private http: HttpClient) { }

      baseUrl: string  =  environment.baseUrl

    findAll():Observable<Categoria[]> {
        const url = `${this.baseUrl}/categorias`
        console.log(`Chamando URL: ${url}`);
        return this.http.get<Categoria[]>(url);
    }
}   