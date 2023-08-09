import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCardItemComponent } from './friend-card-item.component';

describe('FriendCardItemComponent', () => {
  let component: FriendCardItemComponent;
  let fixture: ComponentFixture<FriendCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendCardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
