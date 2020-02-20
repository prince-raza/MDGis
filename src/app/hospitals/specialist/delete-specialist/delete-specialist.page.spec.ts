import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteSpecialistPage } from './delete-specialist.page';

describe('DeleteSpecialistPage', () => {
  let component: DeleteSpecialistPage;
  let fixture: ComponentFixture<DeleteSpecialistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSpecialistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteSpecialistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
