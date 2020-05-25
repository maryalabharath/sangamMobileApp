import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnjumandetailsPage } from './anjumandetails.page';

describe('AnjumandetailsPage', () => {
  let component: AnjumandetailsPage;
  let fixture: ComponentFixture<AnjumandetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnjumandetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnjumandetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
