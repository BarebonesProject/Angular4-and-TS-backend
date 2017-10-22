import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit
{
    imgs = [
        'http://jilles.me/content/images/2015/11/Screenshot-2015-11-20-20-28-45.png'
    ];

    constructor()
    { }

    ngOnInit()
    { }
}