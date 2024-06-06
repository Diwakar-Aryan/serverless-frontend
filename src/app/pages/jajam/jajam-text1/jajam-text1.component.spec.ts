import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajamTextComponent } from './jajam-text1.component';

describe('JajamTextComponent', () => {
  let component: JajamTextComponent;
  let fixture: ComponentFixture<JajamTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JajamTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JajamTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
