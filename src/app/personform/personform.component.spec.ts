import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonformComponent } from './personform.component';

xdescribe('PersonformComponent', () => {
  let component: PersonformComponent;
  let fixture: ComponentFixture<PersonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
