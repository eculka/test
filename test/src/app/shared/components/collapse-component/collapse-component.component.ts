import { Component, OnInit, Input } from '@angular/core';

// Importing necessary font awesome icons
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapse-component',
  templateUrl: './collapse-component.component.html',
  styleUrls: ['./collapse-component.component.scss']
})
export class CollapseComponentComponent implements OnInit {

  // Defining default state of collapse component
  expanded = false;

  // Defining default chevron position
  chevron = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleCollapse() {
    this.expanded = !this.expanded;
    this.chevron = this.expanded ? faChevronUp : faChevronDown;
  }

}
