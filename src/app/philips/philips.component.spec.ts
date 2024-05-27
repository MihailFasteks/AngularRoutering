import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilipsComponent } from './philips.component';

describe('PhilipsComponent', () => {
  let component: PhilipsComponent;
  let fixture: ComponentFixture<PhilipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhilipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhilipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
