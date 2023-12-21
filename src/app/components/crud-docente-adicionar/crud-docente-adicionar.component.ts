import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria.model';
import { Docente } from 'src/app/models/docente.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { DocenteService } from 'src/app/services/docente.service';




@Component({
  selector: 'app-crud-docente-adicionar',
  templateUrl: './crud-docente-adicionar.component.html',
  styleUrls: ['./crud-docente-adicionar.component.css']
})
export class CrudDocenteAdicionarComponent {

  categorias: Categoria[] = [];

  formsRegistrar = this.formBuilder.group({ 
    validaNombre: ['', [Validators.required]] , 
    validaDNI: ['', [Validators.required, Validators.pattern('[0-9]{8}')] ] , 
    validaSueldo: ['', [Validators.required] ] ,
    validaFechaNacimiento: ['', [Validators.required] ] ,
    validaSexo: ['', [Validators.required] ] ,
    validaCategoria: ['', [Validators.required] ] ,
   
});

docente: Docente = { 
  iddocente:0,
  nombre:"",
  dni:"",
  sexo:"",
  fechanacimiento:"",
  sueldo:0,
  categoria:{ idcategoria: 0}


};

constructor( private categoriaService : CategoriaService,
  private docenteService: DocenteService,
  private formBuilder : FormBuilder){


   this.categoriaService.listarCategorias().subscribe(
     x => this.categorias = x
);


}

cargarCategoria(){
  this.categoriaService.listarCategorias().subscribe(
    x => this.categorias = x
  );
}

registrar(){
  if(this.formsRegistrar.valid){
      let fecha = new Date(this.formsRegistrar.value.validaFechaNacimiento || "");
      const docente: Docente = {
          iddocente:0,
          nombre:this.formsRegistrar.value.validaNombre || "",
          dni:this.formsRegistrar.value.validaDNI || "",
          sexo:this.formsRegistrar.value.validaSexo || "",
          fechanacimiento: fecha ? fecha.toISOString().split('T')[0] : "",
          sueldo: parseFloat(this.formsRegistrar.value.validaSueldo || "0"),
          categoria:{ idcategoria: parseInt(this.formsRegistrar.value.validaCategoria || "0")}
      }

      console.log(docente);

      this.docenteService.insertar(docente).subscribe(
          response => {
              console.log(response);
          },
          error => {
              console.log(error);
          }
      );
  }
}


}
