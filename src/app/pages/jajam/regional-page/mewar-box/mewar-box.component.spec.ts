import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MewarBoxComponent } from './mewar-box.component';

describe('MewarBoxComponent', () => {
  let component: MewarBoxComponent;
  let fixture: ComponentFixture<MewarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MewarBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MewarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
