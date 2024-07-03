import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajamSpreadComponent } from './jajam-spread.component';

describe('JajamSpreadComponent', () => {
  let component: JajamSpreadComponent;
  let fixture: ComponentFixture<JajamSpreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JajamSpreadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JajamSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
