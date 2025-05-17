import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightPageComponent } from './copyright-page.component';

describe('CopyrightPageComponent', () => {
  let component: CopyrightPageComponent;
  let fixture: ComponentFixture<CopyrightPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyrightPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopyrightPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
