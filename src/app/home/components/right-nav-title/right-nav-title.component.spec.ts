import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightNavTitleComponent } from './right-nav-title.component';

describe('RightNavTitleComponent', () => {
  let component: RightNavTitleComponent;
  let fixture: ComponentFixture<RightNavTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightNavTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightNavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
