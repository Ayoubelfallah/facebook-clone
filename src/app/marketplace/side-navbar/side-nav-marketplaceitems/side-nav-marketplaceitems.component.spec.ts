import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMarketplaceitemsComponent } from './side-nav-marketplaceitems.component';

describe('SideNavMarketplaceitemsComponent', () => {
  let component: SideNavMarketplaceitemsComponent;
  let fixture: ComponentFixture<SideNavMarketplaceitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMarketplaceitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMarketplaceitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
