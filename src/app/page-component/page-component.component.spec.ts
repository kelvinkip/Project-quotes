import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pageComponentComponent } from './page-component.component';

describe('pageComponentComponent', () => {
  let component: pageComponentComponent;
  let fixture: ComponentFixture<pageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ pageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
