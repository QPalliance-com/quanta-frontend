import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from '../menuitem/menuitem.component';
import { RouterModule } from '@angular/router';
import { MenuService } from '../services/menu.service';
@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, MenuitemComponent, RouterModule],
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss'
})
export class MenuComponent {
    model: MenuItem[] = [];
    constructor(private menuService: MenuService) {}
    ngOnInit() {
        this.menuService.getMenu().subscribe((response) => {
            this.model = response.data;
        });
    }
}
