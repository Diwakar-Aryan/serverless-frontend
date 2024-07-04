import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarfiComponent } from './barfi.component';

describe('BarfiComponent', () => {
  let component: BarfiComponent;
  let fixture: ComponentFixture<BarfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarfiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
