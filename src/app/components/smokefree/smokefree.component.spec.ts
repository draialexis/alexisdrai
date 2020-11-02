import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokefreeComponent } from './smokefree.component';

describe('SmokefreeComponent', () => {
  let component: SmokefreeComponent;
  let fixture: ComponentFixture<SmokefreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmokefreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokefreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
