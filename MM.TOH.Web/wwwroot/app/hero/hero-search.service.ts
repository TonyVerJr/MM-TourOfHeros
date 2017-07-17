import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero } from './hero.model';

@Injectable()
export class HeroSearchService {
    private heroesUrl = 'http://localhost:18281/api/heroes';  
    //private heroesUrl = 'api/heroes';  

    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http
            .get(this.heroesUrl + '/?name=${term}')
            .map(response => response.json().data as Hero[]);
    }
}