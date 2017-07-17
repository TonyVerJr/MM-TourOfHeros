import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero.model';
import { HeroService } from '../hero/hero.service';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService
            .getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }
}