import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [RouterModule, ButtonModule, RippleModule],

    templateUrl: './not-found.html',
    styleUrl: './not-found.scss'
})
export class NotFoundComponent {}
