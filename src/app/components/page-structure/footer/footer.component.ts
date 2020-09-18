import {Component, OnInit} from '@angular/core';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub';
import {faFreeCodeCamp} from '@fortawesome/free-brands-svg-icons/faFreeCodeCamp';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faFreeCodeCamp = faFreeCodeCamp;
  faLinkedin = faLinkedin;

  constructor() {
  }

  ngOnInit(): void {
  }

}
