import { Routes } from '@angular/router';
import { RoleFormComponent } from './components/role-form/role-form';
import { RolesListComponent } from './pages/roles-list/roles-list';
import { CostCenterFormComponent } from './components/cost-center-form/cost-center-form';
import { CostCenterListComponent } from './pages/cost-center-list/cost-center-list';

export const settingsRoutes: Routes = [
    { path: 'roles', data: { breadcrumb: 'Roles' }, component: RolesListComponent },
    { path: 'roles-form/new', data: { breadcrumb: 'Nuevo Rol' }, component: RoleFormComponent },
    { path: 'roles-form/edit/:id', data: { breadcrumb: 'Editar Rol' }, component: RoleFormComponent },
    { path: 'cost-center', data: { breadcrumb: 'Centros de Costos' }, component: CostCenterListComponent },
    { path: 'cost-center-form/new', data: { breadcrumb: 'Nuevo centro de costos' }, component: CostCenterFormComponent },
    { path: 'cost-center-form/edit/:id', data: { breadcrumb: 'Editar centro de costos' }, component: CostCenterFormComponent }
];
