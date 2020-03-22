import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { BusquedaAsignaturaComponent } from './busqueda-asignatura/busqueda-asignatura.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreacionEspacioComponent } from './creacion-espacio/creacion-espacio.component';
import { DetallesEspacioComponent } from './busqueda-asignatura/detalles-espacio/detalles-espacio.component';
import { EspaciosProfesorComponent } from './espacios-profesor/espacios-profesor.component';
import { EspaciosAlumnoComponent } from './espacios-alumno/espacios-alumno.component';
import { HorariosComponent } from './horarios/horarios.component';

import { RegistroComponent } from './registro/registro.component';

import { ProfesorGuard, AlumnoGuard, AdministradorGuard } from '../services/services.index';
import { NuevoAdminComponent } from './nuevo-admin/nuevo-admin.component';
import { PerfilComponent } from './perfil/perfil.component';





const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'busqueda-asignatura', component: BusquedaAsignaturaComponent, data:{titulo:'Busqueda de espacios'} },
            { path: 'inicio', component: HomeComponent, data:{titulo:'Inicio'} },
            { path:'login', component:LoginComponent, data:{titulo:'Inicio sesión'}},
            { path:'registro', component:RegistroComponent, data:{titulo:'Registro'}},

            {path:'perfil', component: PerfilComponent, data:{titulo:'Perfil'}},

            //----CRISTIAN----
            {path:'creacion-espacio', component: CreacionEspacioComponent, data:{titulo:'Creacion de espacio'}, canActivate: [ProfesorGuard]},
            {path:'detalles-espacio/:id', component: DetallesEspacioComponent, data:{titulo: 'Detalle del espacio'}},
            {path:'espacios-profesor', component: EspaciosProfesorComponent, data:{titulo: 'Mis espacios'}, canActivate: [ProfesorGuard]},
            {path:'espacios-alumno', component: EspaciosAlumnoComponent, data:{titulo: 'Mis clases'}, canActivate: [AlumnoGuard]},
            {path:'horarios/:id', component: HorariosComponent, data: {titulo: 'Horarios'}},
            {path:'nuevo-admin', component: NuevoAdminComponent, data: {titulo: 'Crear administrador'}, canActivate: [AdministradorGuard]},
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }
        ]
    }
];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
