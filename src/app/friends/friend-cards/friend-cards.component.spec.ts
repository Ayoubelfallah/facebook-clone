import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendCardsComponent } from './friend-cards.component';

describe('FriendCardsComponent', () => {
  let component: FriendCardsComponent;
  let fixture: ComponentFixture<FriendCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
