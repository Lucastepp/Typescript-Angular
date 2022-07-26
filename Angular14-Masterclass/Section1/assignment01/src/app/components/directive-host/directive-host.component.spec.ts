import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHostComponent } from './directive-host.component';

describe('DirectiveHostComponent', () => {
  let component: DirectiveHostComponent;
  let fixture: ComponentFixture<DirectiveHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
