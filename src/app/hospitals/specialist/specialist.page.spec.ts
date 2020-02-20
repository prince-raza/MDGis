import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialistPage } from './specialist.page';

describe('SpecialistPage', () => {
  let component: SpecialistPage;
  let fixture: ComponentFixture<SpecialistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
