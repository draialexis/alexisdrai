import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Alexis DRAI';
  blurb = ', polyglotte studieux et méthodique, ancien de la restauration, j\'aime la logique et\n' +
    'les systèmes complexes et élégants.';
  position = 'Développeur Java junior';

  constructor() {
  }

  ngOnInit(): void {
  }

}
