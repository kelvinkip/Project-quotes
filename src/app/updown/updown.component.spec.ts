import { ComponentFixture, TestBed } from '@angular/core/testing';

import { updownComponent } from './updown.component';

describe('updownComponent', () => {
  let component: updownComponent;
  let fixture: ComponentFixture<updownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ updownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(updownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
