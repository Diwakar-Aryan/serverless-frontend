import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagruImageComponent } from './bagru-image.component';

describe('BagruImageComponent', () => {
  let component: BagruImageComponent;
  let fixture: ComponentFixture<BagruImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagruImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagruImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
