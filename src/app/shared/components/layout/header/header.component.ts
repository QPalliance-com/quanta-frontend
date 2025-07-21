import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfiguratorComponent } from '../configurator/configurator.component';
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    providers: [LayoutService]
})
export class HeaderComponent {
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
    get logo(): string {
        return this.layoutService.isDarkTheme() ? 'assets/images/Logo-Quanta-Blanco.png' : 'assets/images/Logo-Quanta-principal.png';
    }
}
