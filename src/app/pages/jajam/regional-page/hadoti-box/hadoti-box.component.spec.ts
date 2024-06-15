import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadotiBoxComponent } from './hadoti-box.component';

describe('HadotiBoxComponent', () => {
  let component: HadotiBoxComponent;
  let fixture: ComponentFixture<HadotiBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HadotiBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HadotiBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
