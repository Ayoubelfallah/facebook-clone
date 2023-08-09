import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavShortcutsComponent } from './side-nav-shortcuts.component';

describe('SideNavShortcutsComponent', () => {
  let component: SideNavShortcutsComponent;
  let fixture: ComponentFixture<SideNavShortcutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavShortcutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavShortcutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
