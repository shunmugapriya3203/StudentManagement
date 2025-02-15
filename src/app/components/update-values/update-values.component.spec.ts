import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateValuesComponent } from './update-values.component';

describe('UpdateValuesComponent', () => {
  let component: UpdateValuesComponent;
  let fixture: ComponentFixture<UpdateValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateValuesComponent]
    });
    fixture = TestBed.createComponent(UpdateValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
