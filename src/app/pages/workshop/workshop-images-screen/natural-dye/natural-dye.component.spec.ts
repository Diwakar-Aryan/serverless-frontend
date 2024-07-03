import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalDyeComponent } from './natural-dye.component';

describe('NaturalDyeComponent', () => {
  let component: NaturalDyeComponent;
  let fixture: ComponentFixture<NaturalDyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalDyeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NaturalDyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
