import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavodiloComponent } from './navodilo.component';

describe('NavodiloComponent', () => {
  let component: NavodiloComponent;
  let fixture: ComponentFixture<NavodiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavodiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavodiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
