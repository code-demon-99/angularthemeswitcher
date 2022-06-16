import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicformsComponent } from './dyanamicforms.component';

describe('DyanamicformsComponent', () => {
  let component: DyanamicformsComponent;
  let fixture: ComponentFixture<DyanamicformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyanamicformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyanamicformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
