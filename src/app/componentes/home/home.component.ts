import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroeService} from '../../services/heroe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heroes: any[] = [];
  cargando = true;
  constructor(private _hSrv: HeroeService) {
    this._hSrv.getHeroes().subscribe(data => {
      console.log(data);
      this.heroes = data;
      console.log(this.heroes);
      this.cargando = false;
    });
  }

  ngOnInit() {
  }

  eliminarHeroe(key: string) {
    console.log('eliminando heroe...');
    this._hSrv.deleteHeroe(key).subscribe(data => {
      if (data) {
        console.error(data);
      } else {
        console.log(data);
        delete this.heroes[key];
      }
    });
  }

}
