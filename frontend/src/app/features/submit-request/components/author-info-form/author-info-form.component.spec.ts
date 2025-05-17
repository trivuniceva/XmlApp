import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorInfoFormComponent } from './author-info-form.component';

describe('AuthorInfoFormComponent', () => {
  let component: AuthorInfoFormComponent;
  let fixture: ComponentFixture<AuthorInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
