import { Routes } from '@angular/router';
import { ProductFormComponent } from '../settings/components/product-form/product-form';
import { ProductListComponent } from './pages/products/product-list';
import { RoleFormComponent } from './components/role-form/role-form';

export const settingsRoutes: Routes = [
    { path: 'products', data: { breadcrumb: 'Productos' }, component: ProductListComponent },
    { path: 'products-form/new', data: { breadcrumb: 'Nuevo Producto' }, component: ProductFormComponent },
    { path: 'products-form/edit/:id', data: { breadcrumb: 'Editar Producto' }, component: ProductFormComponent },
    // { path: 'roles', data: { breadcrumb: 'Roles' }, component: ProductListComponent },
    { path: 'roles-form/new', data: { breadcrumb: 'Nuevo Rol' }, component: RoleFormComponent },
    { path: 'roles-form/edit/:id', data: { breadcrumb: 'Editar Rol' }, component: RoleFormComponent }
];
