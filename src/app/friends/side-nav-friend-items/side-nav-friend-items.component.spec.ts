import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFriendItemsComponent } from './side-nav-friend-items.component';

describe('SideNavFriendItemsComponent', () => {
  let component: SideNavFriendItemsComponent;
  let fixture: ComponentFixture<SideNavFriendItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavFriendItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFriendItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
