import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Alexis DRAI';
  blurb = ', polyglotte studieux et méthodique, j\'aime la logique et les systèmes complexes et élégants.';
  position = 'Développeur Full Stack';
  seeking = 'Étudiant Licence Informatique, cherche stage juin-juillet 2021';

  constructor() {
  }

  ngOnInit(): void {
  }

}
