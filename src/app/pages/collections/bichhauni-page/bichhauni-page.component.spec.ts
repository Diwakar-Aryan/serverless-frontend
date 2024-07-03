import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BichhauniPageComponent } from './bichhauni-page.component';

describe('BichhauniPageComponent', () => {
  let component: BichhauniPageComponent;
  let fixture: ComponentFixture<BichhauniPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BichhauniPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BichhauniPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
