import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttileImageComponent } from './texttile-image.component';

describe('TexttileImageComponent', () => {
  let component: TexttileImageComponent;
  let fixture: ComponentFixture<TexttileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexttileImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexttileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
