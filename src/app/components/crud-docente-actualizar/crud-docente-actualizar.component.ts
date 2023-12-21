import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria.model';
import { Docente } from 'src/app/models/docente.model';

import { CategoriaService } from 'src/app/services/categoria.service';
import { DocenteService } from 'src/app/services/docente.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-crud-docente-actualizar',
  templateUrl: './crud-docente-actualizar.component.html',
  styleUrls: ['./crud-docente-actualizar.component.css']
})
export class CrudDocenteActualizarComponent {

  categorias: Categoria[] = [];
  


    formsActualizar = this.formBuilder.group({ 
      validaNombre: ['', [Validators.required] ], 
      validaDNI: ['', [Validators.required, Validators.pattern('[0-9]{8}')] ] , 
      validaFechaNacimiento: ['', Validators.required],
      validaSueldo: ['', Validators.required],
      validaSexo: ['', Validators.required],
      validaCategoria: ['', Validators.required]
      
      
  });


    docente: Docente = { 
        iddocente:0,
        nombre:"",
        dni:"",
        sexo:"",
        fechanacimiento:"",
        sueldo:0,
        categoria:{ idcategoria: 0},
     
    };

    constructor( 
                  private formBuilder: FormBuilder,
                  
                  private categoriaService : CategoriaService,
                  private docenteService: DocenteService,
                  @Inject(MAT_DIALOG_DATA) public data: any
              ){
                this.docente = data;            
                                     
                this.categoriaService.listarCategorias().subscribe(
                  x => this.categorias = x
          );
               
              
    }

   

    cargarCategoria(){
      this.categoriaService.listarCategorias().subscribe(
        x => this.categorias = x
      );
    }

   actualizar(){
    console.log(this.docente);

          this.docenteService.actualizar(this.docente).subscribe(
              x =>  Swal.fire('Mensaje', x.mensaje, 'info')
          );
   }

}
