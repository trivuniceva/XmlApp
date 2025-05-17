import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudonimComponent } from './pseudonim.component';

describe('PseudonimComponent', () => {
  let component: PseudonimComponent;
  let fixture: ComponentFixture<PseudonimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PseudonimComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PseudonimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
