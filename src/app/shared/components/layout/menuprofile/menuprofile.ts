import { Component, computed, effect, ElementRef, inject, OnDestroy, Renderer2 } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { LayoutService } from '../services/layout.service';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: '[app-menu-profile]',
    standalone: true,
    imports: [CommonModule, TooltipModule, ButtonModule, RouterModule],
    templateUrl: './menuprofile.html',
    styleUrl: './menuprofile.scss',
    animations: [
        trigger('menu', [
            transition('void => inline', [style({ height: 0 }), animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 1, height: '*' }))]),
            transition('inline => void', [animate('400ms cubic-bezier(0.86, 0, 0.07, 1)', style({ opacity: 0, height: '0' }))]),
            transition('void => overlay', [style({ opacity: 0, transform: 'scaleY(0.8)' }), animate('.12s cubic-bezier(0, 0, 0.2, 1)')]),
            transition('overlay => void', [animate('.1s linear', style({ opacity: 0 }))])
        ])
    ],
    host: {
        class: 'layout-menu-profile'
    }
})
export class MenuprofileComponent implements OnDestroy {
    layoutService = inject(LayoutService);

    renderer = inject(Renderer2);

    el = inject(ElementRef);

    isHorizontal = computed(() => this.layoutService.isHorizontal() && this.layoutService.isDesktop());

    menuProfileActive = computed(() => this.layoutService.layoutState().menuProfileActive);

    menuProfilePosition = computed(() => this.layoutService.layoutConfig().menuProfilePosition);

    isTooltipDisabled = computed(() => !this.layoutService.isSlim());

    subscription!: Subscription;

    outsideClickListener: any;

    constructor() {
        this.subscription = this.layoutService.overlayOpen$.subscribe(() => {
            if (this.isHorizontal() && this.menuProfileActive()) {
                this.layoutService.layoutState.update((value) => ({ ...value, menuProfileActive: false }));
            }
        });

        effect(() => {
            if (this.isHorizontal() && this.menuProfileActive() && !this.outsideClickListener) {
                this.bindOutsideClickListener();
            }

            if (!this.menuProfileActive() && this.isHorizontal()) {
                this.unbindOutsideClickListener();
            }
        });
    }

    bindOutsideClickListener() {
        if (this.isHorizontal()) {
            this.outsideClickListener = this.renderer.listen(document, 'click', (event: MouseEvent) => {
                if (this.menuProfileActive()) {
                    const isOutsideClicked = !(this.el.nativeElement.isSameNode(event.target) || this.el.nativeElement.contains(event.target));
                    if (isOutsideClicked) {
                        this.layoutService.layoutState.update((value) => ({ ...value, menuProfileActive: false }));
                    }
                }
            });
        }
    }

    unbindOutsideClickListener() {
        if (this.outsideClickListener) {
            this.outsideClickListener();
            this.outsideClickListener = null;
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.unbindOutsideClickListener();
    }

    toggleMenu() {
        this.layoutService.onMenuProfileToggle();
    }
}
