import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
    selector: 'app-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
    constructor(
    private authService: AuthService,
    ) {}
    ngOnInit() {

    }
    allow() {
    return this.authService.isEnabled();
    }

}
    // checkIf() {
    //     if (this.authService.isEnabled() === true) {
	//         document.getElementById('elementToShow').className = 'showClass';
    //     } else {
    //         document.getElementById('elementToShow').className = 'hideClass';
    //     }
    // }