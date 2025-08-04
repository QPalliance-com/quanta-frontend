import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/products/product-list';
import { ProductFormComponent } from './components/product-form/product-form';

export const inventoryRoutes: Routes = [
    { path: 'products', data: { breadcrumb: 'Productos' }, component: ProductListComponent },
    { path: 'products-form/new', data: { breadcrumb: 'Nuevo Producto' }, component: ProductFormComponent },
    { path: 'products-form/edit/:id', data: { breadcrumb: 'Editar Producto' }, component: ProductFormComponent }
];
