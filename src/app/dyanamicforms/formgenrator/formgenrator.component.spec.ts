import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgenratorComponent } from './formgenrator.component';

describe('FormgenratorComponent', () => {
  let component: FormgenratorComponent;
  let fixture: ComponentFixture<FormgenratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgenratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgenratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
