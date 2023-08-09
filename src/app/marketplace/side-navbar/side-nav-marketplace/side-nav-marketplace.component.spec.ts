import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMarketplaceComponent } from './side-nav-marketplace.component';

describe('SideNavMarketplaceComponent', () => {
  let component: SideNavMarketplaceComponent;
  let fixture: ComponentFixture<SideNavMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
