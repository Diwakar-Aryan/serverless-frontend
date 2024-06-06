import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JajamComponent } from './jajam.component';

describe('JajamComponent', () => {
  let component: JajamComponent;
  let fixture: ComponentFixture<JajamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JajamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JajamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
