import { Routes } from '@angular/router';
import { SupplierListComponent } from './pages/suppliers/supplier-list';
import { SupplierFormComponent } from './components/supplier-form/supplier-form';
import { PurchaseOrdersComponent } from './pages/purchase-orders/purchase-orders';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form';
import { OspListComponent } from './pages/osp-list/osp-list';

export const purchasesRoutes: Routes = [
    // { path: '', component: PurchasesDashboardComponent },
    { path: 'suppliers', data: { breadcrumb: 'Proveedores' }, component: SupplierListComponent },
    { path: 'suppliers-form/new', data: { breadcrumb: 'Nuevo Proveedor' }, component: SupplierFormComponent },
    { path: 'suppliers-form/edit/:id', data: { breadcrumb: 'Editar Proveedor' }, component: SupplierFormComponent },
    { path: 'orders', data: { breadcrumb: 'Órdenes' }, component: PurchaseOrdersComponent },
    { path: 'orders-form/new', data: { breadcrumb: 'Nueva Orden' }, component: PurchaseFormComponent },
    { path: 'orders-form/edit/:id', component: PurchaseFormComponent },
    { path: 'osp', data: { breadcrumb: 'Plan Optimo de Suministros (OSP)' }, component: OspListComponent }
];
