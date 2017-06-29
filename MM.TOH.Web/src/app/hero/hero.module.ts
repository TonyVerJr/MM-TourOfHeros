import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        HeroDetailComponent,
        HeroesComponent
    ],
    providers: [
        HeroService
    ],
    exports: [
        HeroDetailComponent,
        HeroesComponent
    ]
})

export class HeroModule { }
