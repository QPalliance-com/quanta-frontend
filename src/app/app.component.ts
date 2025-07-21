import { Component, inject, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { LoaderComponent } from './shared/components/ui/loader/loader.component';
import { LoaderService } from './shared/components/ui/loader/loader.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, LoaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'Quanta Frontend';
    private router = inject(Router);
    private loader = inject(LoaderService);

    ngOnInit() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.loader.show();
            }

            if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
                this.loader.hide();
            }
        });
    }
}
