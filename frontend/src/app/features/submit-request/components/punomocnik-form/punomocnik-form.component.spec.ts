import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunomocnikFormComponent } from './punomocnik-form.component';

describe('PunomocnikFormComponent', () => {
  let component: PunomocnikFormComponent;
  let fixture: ComponentFixture<PunomocnikFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunomocnikFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunomocnikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
