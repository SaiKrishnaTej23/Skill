import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillChangeComponent } from './skill-change.component';

describe('SkillChangeComponent', () => {
  let component: SkillChangeComponent;
  let fixture: ComponentFixture<SkillChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
