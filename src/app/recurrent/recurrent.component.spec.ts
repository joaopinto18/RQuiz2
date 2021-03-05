import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurrentComponent } from './recurrent.component';

describe('RecurrentComponent', () => {
  let component: RecurrentComponent;
  let fixture: ComponentFixture<RecurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
