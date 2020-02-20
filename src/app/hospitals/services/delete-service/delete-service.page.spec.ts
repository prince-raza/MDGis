import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteServicePage } from './delete-service.page';

describe('DeleteServicePage', () => {
  let component: DeleteServicePage;
  let fixture: ComponentFixture<DeleteServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
