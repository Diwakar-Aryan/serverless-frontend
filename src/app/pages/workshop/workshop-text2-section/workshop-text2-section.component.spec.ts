import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopText2SectionComponent } from './workshop-text2-section.component';

describe('WorkshopText2SectionComponent', () => {
  let component: WorkshopText2SectionComponent;
  let fixture: ComponentFixture<WorkshopText2SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopText2SectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopText2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
