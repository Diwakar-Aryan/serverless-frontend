import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesTextSectionComponent } from './notes-text-section.component';

describe('NotesTextSectionComponent', () => {
  let component: NotesTextSectionComponent;
  let fixture: ComponentFixture<NotesTextSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesTextSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesTextSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
