import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallecadapeliComponent } from './detallecadapeli.component';

describe('DetallecadapeliComponent', () => {
  let component: DetallecadapeliComponent;
  let fixture: ComponentFixture<DetallecadapeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallecadapeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallecadapeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
