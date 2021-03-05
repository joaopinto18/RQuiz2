import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelisfavoritasComponent } from './pelisfavoritas.component';

describe('PelisfavoritasComponent', () => {
  let component: PelisfavoritasComponent;
  let fixture: ComponentFixture<PelisfavoritasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelisfavoritasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelisfavoritasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
