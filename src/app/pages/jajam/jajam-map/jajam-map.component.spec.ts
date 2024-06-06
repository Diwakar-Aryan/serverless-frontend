import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajamMapComponent } from './jajam-map.component';

describe('JajamMapComponent', () => {
  let component: JajamMapComponent;
  let fixture: ComponentFixture<JajamMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JajamMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JajamMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
