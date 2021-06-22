import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditAgendaPage } from './edit-agenda.page';

describe('EditAgendaPage', () => {
  let component: EditAgendaPage;
  let fixture: ComponentFixture<EditAgendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditAgendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
