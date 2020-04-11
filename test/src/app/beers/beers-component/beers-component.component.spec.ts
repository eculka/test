import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersComponentComponent } from './beers-component.component';

describe('BeersComponentComponent', () => {
  let component: BeersComponentComponent;
  let fixture: ComponentFixture<BeersComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
