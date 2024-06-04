import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopTextComponent } from './workshop-text.component';

describe('WorkshopTextComponent', () => {
  let component: WorkshopTextComponent;
  let fixture: ComponentFixture<WorkshopTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkshopTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
