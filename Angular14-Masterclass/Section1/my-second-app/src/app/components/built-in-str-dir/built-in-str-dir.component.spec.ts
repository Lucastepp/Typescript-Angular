import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInStrDirComponent } from './built-in-str-dir.component';

describe('BuiltInStrDirComponent', () => {
  let component: BuiltInStrDirComponent;
  let fixture: ComponentFixture<BuiltInStrDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuiltInStrDirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInStrDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
