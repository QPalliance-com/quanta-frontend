import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    //   { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
    {
        path: '',
        component: MainLayoutComponent,
        // canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.routes').then((m) => m.dashboardRoutes) },
            { path: 'purchases', loadChildren: () => import('./features/purchases/purchases.routes').then((m) => m.purchasesRoutes) },
            { path: 'inventory', loadChildren: () => import('./features/inventory/inventory.routes').then((m) => m.inventoryRoutes) }
            // Módulos futuros...
        ]
    }
];
