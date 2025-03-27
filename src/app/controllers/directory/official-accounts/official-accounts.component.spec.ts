import { type ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficialAccountsComponent } from './official-accounts.component';

describe('OfficialAccountsComponent', () => {
  let component: OfficialAccountsComponent;
  let fixture: ComponentFixture<OfficialAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OfficialAccountsComponent],
    });
    fixture = TestBed.createComponent(OfficialAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
