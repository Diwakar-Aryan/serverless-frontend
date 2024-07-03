import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaupadGameComponent } from './chaupad-game.component';

describe('ChaupadGameComponent', () => {
  let component: ChaupadGameComponent;
  let fixture: ComponentFixture<ChaupadGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaupadGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaupadGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
