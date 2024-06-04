import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopImageSectionComponent } from './workshop-image-section.component';

describe('WorkshopImageSectionComponent', () => {
  let component: WorkshopImageSectionComponent;
  let fixture: ComponentFixture<WorkshopImageSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopImageSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopImageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
