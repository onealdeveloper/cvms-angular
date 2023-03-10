import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberSelfProfileFormComponent } from './member-self-profile-form.component';

describe('MemberProfileFormComponent', () => {
  let component: MemberSelfProfileFormComponent;
  let fixture: ComponentFixture<MemberSelfProfileFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSelfProfileFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSelfProfileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
