import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuitemComponent } from '../menuitem/menuitem';
import { RouterModule } from '@angular/router';
import { MenuService } from '../services/menu.service';
import { MenuStore } from '../store/menu.store';
@Component({
    selector: 'app-menu, [app-menu]',
    standalone: true,
    imports: [CommonModule, MenuitemComponent, RouterModule],
    providers: [MenuStore],
    templateUrl: './menu.html',
    styleUrl: './menu.scss'
})
export class MenuComponent {
    el: ElementRef = inject(ElementRef);
    menuStore = inject(MenuStore);
    @ViewChild('menuContainer') menuContainer!: ElementRef;

    constructor(private menuService: MenuService) {}
    ngOnInit() {
        this.menuStore.loadMenu();
    }
}
