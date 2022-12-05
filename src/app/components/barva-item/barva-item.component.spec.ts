import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarvaItemComponent } from './barva-item.component';

describe('BarvaItemComponent', () => {
  let component: BarvaItemComponent;
  let fixture: ComponentFixture<BarvaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarvaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarvaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
