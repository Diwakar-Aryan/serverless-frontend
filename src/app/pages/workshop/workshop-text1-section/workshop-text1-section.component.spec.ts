import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopText1SectionComponent } from './workshop-text1-section.component';

describe('WorkshopText1SectionComponent', () => {
  let component: WorkshopText1SectionComponent;
  let fixture: ComponentFixture<WorkshopText1SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopText1SectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopText1SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
