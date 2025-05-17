import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantIdentificationComponent } from './applicant-identification.component';

describe('ApplicantIdentificationComponent', () => {
  let component: ApplicantIdentificationComponent;
  let fixture: ComponentFixture<ApplicantIdentificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicantIdentificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantIdentificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
