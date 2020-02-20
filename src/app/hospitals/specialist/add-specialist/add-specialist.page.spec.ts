import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSpecialistPage } from './add-specialist.page';

describe('AddSpecialistPage', () => {
  let component: AddSpecialistPage;
  let fixture: ComponentFixture<AddSpecialistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecialistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSpecialistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
