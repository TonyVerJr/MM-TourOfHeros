import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Hero } from './hero.model';

@Injectable()
export class HeroService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private heroesUrl = 'http://localhost:18281/api/heroes';  
    //private heroesUrl = 'api/heroes';  

    constructor(private http: Http) { }

    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .get(url)
            .map(this.extractData)
            //.map(response => response.json().data || {} as Hero)
            .catch(this.handleError);
    }

    getHeroes(): Observable<Hero[]> {
        return this.http
            .get(this.heroesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    update(hero: Hero): Observable<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .map(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Observable<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    delete(id: number): Observable<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .map(() => null)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();   // used when calling web api
        //let body = res.json().data;   // used when calling in memory api
        return body || {};
    }

    private handleError(error: any) {
        let errMsg: string;

        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);

        //console.error('An error occurred', error);
        //return Observable.throw(error);
    }
}