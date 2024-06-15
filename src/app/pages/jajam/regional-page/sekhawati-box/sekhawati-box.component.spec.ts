import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SekhawatiBoxComponent } from './sekhawati-box.component';

describe('SekhawatiBoxComponent', () => {
  let component: SekhawatiBoxComponent;
  let fixture: ComponentFixture<SekhawatiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SekhawatiBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SekhawatiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
