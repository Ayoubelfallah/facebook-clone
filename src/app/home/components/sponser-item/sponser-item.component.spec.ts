import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponserItemComponent } from './sponser-item.component';

describe('SponserItemComponent', () => {
  let component: SponserItemComponent;
  let fixture: ComponentFixture<SponserItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SponserItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SponserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
