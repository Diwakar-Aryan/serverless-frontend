import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTexttileComponent } from './people-texttile.component';

describe('PeopleTexttileComponent', () => {
  let component: PeopleTexttileComponent;
  let fixture: ComponentFixture<PeopleTexttileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleTexttileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeopleTexttileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
