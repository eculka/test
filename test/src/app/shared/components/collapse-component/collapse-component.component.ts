import { Component, OnInit, Input } from '@angular/core';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapse-component',
  templateUrl: './collapse-component.component.html',
  styleUrls: ['./collapse-component.component.scss']
})
export class CollapseComponentComponent implements OnInit {

  expanded = false;
  chevron = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleCollapse() {
    this.expanded = !this.expanded;
    this.chevron = this.expanded ? faChevronUp : faChevronDown;
  }

}
