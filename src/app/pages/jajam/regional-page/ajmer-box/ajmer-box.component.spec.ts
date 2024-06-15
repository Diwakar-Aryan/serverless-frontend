import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjmerBoxComponent } from './ajmer-box.component';

describe('AjmerBoxComponent', () => {
  let component: AjmerBoxComponent;
  let fixture: ComponentFixture<AjmerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjmerBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjmerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
