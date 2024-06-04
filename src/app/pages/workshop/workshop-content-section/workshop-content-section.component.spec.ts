import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopContentSectionComponent } from './workshop-content-section.component';

describe('WorkshopContentSectionComponent', () => {
  let component: WorkshopContentSectionComponent;
  let fixture: ComponentFixture<WorkshopContentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopContentSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopContentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
