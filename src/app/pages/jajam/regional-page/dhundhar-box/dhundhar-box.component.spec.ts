import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhundharBoxComponent } from './dhundhar-box.component';

describe('DhundharBoxComponent', () => {
  let component: DhundharBoxComponent;
  let fixture: ComponentFixture<DhundharBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DhundharBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DhundharBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
