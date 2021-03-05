import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniPostcardComponent } from './mini-postcard.component';

describe('MiniPostcardComponent', () => {
  let component: MiniPostcardComponent;
  let fixture: ComponentFixture<MiniPostcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniPostcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniPostcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
