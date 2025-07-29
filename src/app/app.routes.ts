import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //   { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    {
        path: '',
        component: MainLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', data: { breadcrumb: 'Dashboard' }, loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes) },
            { path: 'purchases', data: { breadcrumb: 'Compras' }, loadChildren: () => import('./features/purchases/purchases.routes').then((m) => m.purchasesRoutes) },
            { path: 'inventory', data: { breadcrumb: 'Inventario' }, loadChildren: () => import('./features/inventory/inventory.routes').then((m) => m.inventoryRoutes) },
            { path: 'settings', data: { breadcrumb: 'Configuración' }, loadChildren: () => import('./features/settings/settings.routes').then((m) => m.settingsRoutes) }

            // Módulos futuros...
        ]
    }
];
