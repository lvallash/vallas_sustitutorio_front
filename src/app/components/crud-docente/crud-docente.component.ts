import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Docente } from 'src/app/models/docente.model';
import { DocenteService } from 'src/app/services/docente.service';
import {  CategoriaService } from 'src/app/services/categoria.service';
import Swal from 'sweetalert2'
import { CrudDocenteAdicionarComponent } from '../crud-docente-adicionar/crud-docente-adicionar.component';
import { CrudDocenteActualizarComponent } from '../crud-docente-actualizar/crud-docente-actualizar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-crud-docente',
  templateUrl: './crud-docente.component.html',
  styleUrls: ['./crud-docente.component.css']
})
export class CrudDocenteComponent implements OnInit{

  filtro: string ="";
  categorias: Categoria[] = [];
  dataSource:any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  displayedColumns = ["idDocente","nombre","dni","fecha","sueldo","sexo" , "categoria", "acciones"];

  constructor(private formBuilder: FormBuilder,  
    private dialogService: MatDialog,
    private docenteService:DocenteService, 
    private categoriaService:CategoriaService,
  ) {
this.categoriaService.listarCategorias().subscribe(
response => this.categorias = response
);            
}


  
openAddDialog() {
  console.log(">>> openAddDialog  >>");
  const dialogRef = this.dialogService.open(CrudDocenteAdicionarComponent);
  dialogRef.afterClosed().subscribe(result => {
      console.log(">>> result >> " + result);
      if (result === 1) {
          this.refreshTable();
      }
  });
}

openUpdateDialog(obj:Docente){
  console.log(">>> openUpdateDialog  >>");
  
  const dialogRef = this.dialogService.open(CrudDocenteActualizarComponent, {data:obj});
  dialogRef.afterClosed().subscribe(result => {
      console.log(">>> result >> " + result);
      if (result === 1) {
          this.refreshTable();
      }
  });
}


consultaDocente(){
  console.log(">>> consultaDocente >>> " +  this.filtro);
  this.refreshTable();
}



elimina(obj:Docente){
  Swal.fire({
    title: '¿Desea eliminar?',
    text: "Los cambios no se pueden a revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
        if (result.isConfirmed) {
            this.docenteService.eliminar(obj.iddocente || 0).subscribe(
                  x => {
                        this.refreshTable();
                        Swal.fire('Mensaje', x.mensaje, 'info');
                  }
            );
        }
  })   
}


private refreshTable() {
this.docenteService.consultarPorNombre(this.filtro==""?"todos":this.filtro).subscribe(
x => {
  this.dataSource = new MatTableDataSource<Docente>(x);
  this.dataSource.paginator = this.paginator; 
}
);
}
















  ngOnInit(): void {
    
  }



}
