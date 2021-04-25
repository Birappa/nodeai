import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonLibsComponent } from './python-libs.component';

describe('PythonLibsComponent', () => {
  let component: PythonLibsComponent;
  let fixture: ComponentFixture<PythonLibsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonLibsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
