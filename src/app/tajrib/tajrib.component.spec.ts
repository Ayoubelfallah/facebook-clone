import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TajribComponent } from './tajrib.component';

describe('TajribComponent', () => {
  let component: TajribComponent;
  let fixture: ComponentFixture<TajribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TajribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TajribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
