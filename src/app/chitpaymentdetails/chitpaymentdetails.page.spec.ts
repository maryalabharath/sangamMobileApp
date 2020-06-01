import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChitpaymentdetailsPage } from './chitpaymentdetails.page';

describe('ChitpaymentdetailsPage', () => {
  let component: ChitpaymentdetailsPage;
  let fixture: ComponentFixture<ChitpaymentdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitpaymentdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChitpaymentdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
