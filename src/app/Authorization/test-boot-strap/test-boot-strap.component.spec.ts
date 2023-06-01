import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootStrapComponent } from './test-boot-strap.component';

describe('TestBootStrapComponent', () => {
  let component: TestBootStrapComponent;
  let fixture: ComponentFixture<TestBootStrapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestBootStrapComponent]
    });
    fixture = TestBed.createComponent(TestBootStrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
