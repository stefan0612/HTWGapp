import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from "~/app/model/user/user.model";
import * as dialogsModule from "tns-core-modules/ui/dialogs";

@Injectable()
export class LoginService {
    private serverUrl = "https://app.asta.htwg-konstanz.de/api/user/auth"
    
    constructor(private http: HttpClient) { }

    login(user: User): Observable<Object> {
        return this.http.post(this.serverUrl, JSON.stringify(user));
    }
    
}