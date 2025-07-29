import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from '../menuitem/menuitem';
import { RouterModule } from '@angular/router';
import { MenuService } from '../services/menu.service';
@Component({
    selector: 'app-menu, [app-menu]',
    standalone: true,
    imports: [CommonModule, MenuitemComponent, RouterModule],
    templateUrl: './menu.html',
    styleUrl: './menu.scss'
})
export class MenuComponent {
    el: ElementRef = inject(ElementRef);

    @ViewChild('menuContainer') menuContainer!: ElementRef;
    model: MenuItem[] = [];
    constructor(private menuService: MenuService) {}
    ngOnInit() {
        this.menuService.getMenu().subscribe((response) => {
            this.model = response.data;
        });
    }
}
