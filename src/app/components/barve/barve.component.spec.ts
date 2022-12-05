import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarveComponent } from './barve.component';

describe('BarveComponent', () => {
  let component: BarveComponent;
  let fixture: ComponentFixture<BarveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
