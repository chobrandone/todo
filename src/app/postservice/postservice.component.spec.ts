import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostserviceComponent } from './postservice.component';

describe('PostserviceComponent', () => {
  let component: PostserviceComponent;
  let fixture: ComponentFixture<PostserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
