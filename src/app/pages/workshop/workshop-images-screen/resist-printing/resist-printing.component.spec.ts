import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistPrintingComponent } from './resist-printing.component';

describe('ResistPrintingComponent', () => {
  let component: ResistPrintingComponent;
  let fixture: ComponentFixture<ResistPrintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResistPrintingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResistPrintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
