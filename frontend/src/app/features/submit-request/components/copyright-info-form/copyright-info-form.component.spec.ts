import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightInfoFormComponent } from './copyright-info-form.component';

describe('CopyrightInfoFormComponent', () => {
  let component: CopyrightInfoFormComponent;
  let fixture: ComponentFixture<CopyrightInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
