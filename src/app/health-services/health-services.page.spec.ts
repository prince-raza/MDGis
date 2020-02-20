import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthServicesPage } from './health-services.page';

describe('HealthServicesPage', () => {
  let component: HealthServicesPage;
  let fixture: ComponentFixture<HealthServicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthServicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthServicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
