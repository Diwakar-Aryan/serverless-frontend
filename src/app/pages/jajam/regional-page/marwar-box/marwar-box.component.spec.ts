import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarwarBoxComponent } from './marwar-box.component';

describe('MarwarBoxComponent', () => {
  let component: MarwarBoxComponent;
  let fixture: ComponentFixture<MarwarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarwarBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarwarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
