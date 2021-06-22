import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Local1Page } from './local1.page';

describe('Local1Page', () => {
  let component: Local1Page;
  let fixture: ComponentFixture<Local1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Local1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Local1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
