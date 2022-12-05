import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StevecComponent } from './stevec.component';

describe('StevecComponent', () => {
  let component: StevecComponent;
  let fixture: ComponentFixture<StevecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StevecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StevecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
