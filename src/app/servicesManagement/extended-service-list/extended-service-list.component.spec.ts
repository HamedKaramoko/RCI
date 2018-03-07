import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedServiceListComponent } from './extended-service-list.component';

describe('ExtendedServiceListComponent', () => {
  let component: ExtendedServiceListComponent;
  let fixture: ComponentFixture<ExtendedServiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedServiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
