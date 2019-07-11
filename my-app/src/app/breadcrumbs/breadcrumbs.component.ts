import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbsList;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit() {
    this.router.events
    .pipe(
      filter(value => (value instanceof NavigationEnd)),
      map(value => value as NavigationEnd))
    .subscribe(value => {
      this.breadcrumbsList = [];
      const paths = value.url.split('/').slice(1);
      for (const path of paths) {
        const route = this.router.config.find(item => item.path.includes(path));
        if (route) {
          this.breadcrumbsList.push(route);
        } else {
          this.breadcrumbsList.push(this.activatedRoute.firstChild.snapshot);
        }
      }
    });
  }
}
