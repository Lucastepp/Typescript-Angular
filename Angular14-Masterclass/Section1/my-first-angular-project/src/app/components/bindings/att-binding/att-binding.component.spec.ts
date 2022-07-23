import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttBindingComponent } from './att-binding.component';

describe('AttBindingComponent', () => {
  let component: AttBindingComponent;
  let fixture: ComponentFixture<AttBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
