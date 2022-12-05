import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolocniCleniComponent } from './dolocni-cleni.component';

describe('DolocniCleniComponent', () => {
  let component: DolocniCleniComponent;
  let fixture: ComponentFixture<DolocniCleniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolocniCleniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolocniCleniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
