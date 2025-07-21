import { Routes } from '@angular/router';
import { SupplierListComponent } from './pages/suppliers/supplier-list.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { PurchaseOrdersComponent } from './pages/purchase-orders/purchase-orders.component';
import { PurchaseRequestsComponent } from './pages/purchase-requests/purchase-requests.component';
import { PurchaseFormComponent } from './components/purchase-form/purchase-form.component';

export const purchasesRoutes: Routes = [
    // { path: '', component: PurchasesDashboardComponent },
    { path: 'suppliers', component: SupplierListComponent },
    { path: 'suppliers-form/new', component: SupplierFormComponent },
    { path: 'suppliers-form/edit/:id', component: SupplierFormComponent },
    { path: 'requests', component: PurchaseRequestsComponent },
    { path: 'orders', component: PurchaseOrdersComponent },
    { path: 'requests-form/new', component: PurchaseFormComponent },
    { path: 'requests-form/edit/:id', component: PurchaseFormComponent }
];
