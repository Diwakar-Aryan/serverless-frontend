import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalPageComponent } from './regional-page.component';

describe('RegionalPageComponent', () => {
  let component: RegionalPageComponent;
  let fixture: ComponentFixture<RegionalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegionalPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegionalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
