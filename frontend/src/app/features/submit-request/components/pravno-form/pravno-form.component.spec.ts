import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PravnoFormComponent } from './pravno-form.component';

describe('PravnoFormComponent', () => {
  let component: PravnoFormComponent;
  let fixture: ComponentFixture<PravnoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PravnoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PravnoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
