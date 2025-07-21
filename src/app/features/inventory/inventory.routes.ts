import { Routes } from '@angular/router';
import { ProductsFormComponent } from './components/products/products-form/products-form.component';
import { ProductListComponent } from './pages/products/product-list.component';

export const inventoryRoutes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products-form/new', component: ProductsFormComponent },
    { path: 'products-form/edit/:id', component: ProductsFormComponent }
];
