import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroeService} from '../../services/heroe.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    casa: '',
    bio: ''
  }

  nuevo = false;
  id: string;

  constructor(private _hService: HeroeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe(
      parametros => {
        console.log('parametros: ' + parametros)
        this.id = parametros['id'];
        if (this.id === 'nuevo') {
            this.heroe = {
              nombre: '',
              casa: '',
              bio: ''
          };
        } else {
            this._hService.getHeroe(this.id).subscribe(data => this.heroe = data, error => console.error(error));
        }
      });
  }

  ngOnInit() {
  }

  guardar() {
    if (this.id === 'nuevo') {
      console.log('nuevo');
      this.nuevo = true;
      this._hService.nuevoHeroe(this.heroe).subscribe(data => {
        console.log(data);
        this._router.navigate(['/editar', data.name]);
      }, error => console.error(error));
    } else {
      console.log('actualizar');
      this.nuevo = false;
      this._hService.actualizarHeroe(this.heroe, this.id).subscribe(data => {
        console.log(data);
        this._router.navigate(['/editar', this.id]);
      }, error => console.error(error));
    }
  }

  nuevoHeroe(formulario: NgForm) {
      console.log('Nuevo heroe...');
      this._router.navigate(['/editar', 'nuevo']);
      formulario.reset({nombre: '',
      casa: 'Marvel',
      bio: ''});
  }
}
