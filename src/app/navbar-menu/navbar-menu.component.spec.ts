import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarMenuComponent } from './navbar-menu.component';

describe('NavbarMenuComponent', () => {
  let component: NavbarMenuComponent;
  let fixture: ComponentFixture<NavbarMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
