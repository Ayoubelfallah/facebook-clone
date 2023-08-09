import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFriendsComponent } from './side-nav-friends.component';

describe('SideNavFriendsComponent', () => {
  let component: SideNavFriendsComponent;
  let fixture: ComponentFixture<SideNavFriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavFriendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
