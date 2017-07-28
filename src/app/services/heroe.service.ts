import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface'
import 'rxjs/Rx';

@Injectable()
export class HeroeService {

  heroesURL = 'https://fir-app-b92e9.firebaseio.com/heroes.json';
  actualizarHeroeURL = 'https://fir-app-b92e9.firebaseio.com/heroes/';

  constructor(private http: Http) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.heroesURL, body, { headers }).map(
      res => {
        console.log(res.json());
        return res.json();
      }
    );
  }

  actualizarHeroe(heroe: Heroe, key: string) {
    console.log(key);
    const body = JSON.stringify(heroe);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.actualizarHeroeURL}${key}.json`
    return this.http.put(url, body, { headers }).map(
      res => {
        console.log(res.json());
        return res.json();
      }
    );
  }

  getHeroe(key: string) {
    console.log(key);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.actualizarHeroeURL}${key}.json`
    return this.http.get(url, { headers }).map(
      res => {
        console.log(res.json());
        return res.json();
      }
    );
  }

  getHeroes() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.get(this.heroesURL, { headers }).map(
      res => {
        return res.json();
      }
    );
  }

  deleteHeroe(key: string) {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.actualizarHeroeURL}${key}.json`
    return this.http.delete(url, { headers }).map(
      res => {
        return res.json();
      }
    );
  }

}
