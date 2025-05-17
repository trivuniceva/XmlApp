import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizickoFormComponent } from './fizicko-form.component';

describe('FizickoFormComponent', () => {
  let component: FizickoFormComponent;
  let fixture: ComponentFixture<FizickoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FizickoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FizickoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
