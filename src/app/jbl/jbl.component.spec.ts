import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JblComponent } from './jbl.component';

describe('JblComponent', () => {
  let component: JblComponent;
  let fixture: ComponentFixture<JblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JblComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
