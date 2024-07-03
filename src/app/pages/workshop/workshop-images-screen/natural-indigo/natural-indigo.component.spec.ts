import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalIndigoComponent } from './natural-indigo.component';

describe('NaturalIndigoComponent', () => {
  let component: NaturalIndigoComponent;
  let fixture: ComponentFixture<NaturalIndigoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalIndigoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalIndigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
