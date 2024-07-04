import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharChaukorComponent } from './char-chaukor.component';

describe('CharChaukorComponent', () => {
  let component: CharChaukorComponent;
  let fixture: ComponentFixture<CharChaukorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharChaukorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharChaukorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
