import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { MenuItem } from 'primeng/api';
import { StyleClassModule } from 'primeng/styleclass';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyService } from '../../../../features/settings/services/company.service';
import { Observable } from 'rxjs';
import { Company } from '../../../../features/settings/models/company.model';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { MegaMenuModule } from 'primeng/megamenu';
import { BadgeModule } from 'primeng/badge';
@Component({
    selector: '[app-header]',
    standalone: true,
    imports: [RouterModule, CommonModule, StyleClassModule, FormsModule, ButtonModule, MegaMenuModule, BadgeModule],
    templateUrl: './header.html',
    styleUrl: './header.scss',
    providers: [LayoutService],
    host: {
        class: 'layout-topbar'
    }
})
export class HeaderComponent {
    layoutService = inject(LayoutService);

    @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

    @ViewChild('menuButton') menuButton!: ElementRef<HTMLButtonElement>;

    @ViewChild('mobileMenuButton') mobileMenuButton!: ElementRef<HTMLButtonElement>;
    items!: MenuItem[];
    company$: Observable<Company | null>;

    constructor(private companyService: CompanyService) {
        this.company$ = this.companyService.company$;
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }
    onMenuButtonClick() {
        this.layoutService.onMenuToggle();
    }

    onRightMenuButtonClick() {
        this.layoutService.openRightMenu();
    }

    toggleConfigSidebar() {
        let layoutState = this.layoutService.layoutState();

        if (this.layoutService.isSidebarActive()) {
            layoutState.overlayMenuActive = false;
            layoutState.overlaySubmenuActive = false;
            layoutState.staticMenuMobileActive = false;
            layoutState.menuHoverActive = false;
            layoutState.configSidebarVisible = false;
        }
        layoutState.configSidebarVisible = !layoutState.configSidebarVisible;
        this.layoutService.layoutState.set({ ...layoutState });
    }

    focusSearchInput() {
        setTimeout(() => {
            this.searchInput.nativeElement.focus();
        }, 150);
    }

    onTopbarMenuToggle() {
        this.layoutService.layoutState.update((val) => ({ ...val, topbarMenuActive: !val.topbarMenuActive }));
    }
}
