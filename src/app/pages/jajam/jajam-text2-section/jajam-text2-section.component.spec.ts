import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajamText2SectionComponent } from './jajam-text2-section.component';

describe('JajamText2SectionComponent', () => {
  let component: JajamText2SectionComponent;
  let fixture: ComponentFixture<JajamText2SectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JajamText2SectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JajamText2SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
