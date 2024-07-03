import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockCarvingComponent } from './block-carving.component';

describe('BlockCarvingComponent', () => {
  let component: BlockCarvingComponent;
  let fixture: ComponentFixture<BlockCarvingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockCarvingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockCarvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
