import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldgeneratorComponent } from './fieldgenerator.component';

describe('FieldgeneratorComponent', () => {
  let component: FieldgeneratorComponent;
  let fixture: ComponentFixture<FieldgeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldgeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldgeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
