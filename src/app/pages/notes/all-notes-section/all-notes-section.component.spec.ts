import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotesSectionComponent } from './all-notes-section.component';

describe('AllNotesSectionComponent', () => {
  let component: AllNotesSectionComponent;
  let fixture: ComponentFixture<AllNotesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNotesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNotesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
