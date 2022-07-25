import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskssComponent } from './taskss.component';

describe('TaskssComponent', () => {
  let component: TaskssComponent;
  let fixture: ComponentFixture<TaskssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
