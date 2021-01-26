import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { APODPage } from './apod.page';

describe('APODPage', () => {
  let component: APODPage;
  let fixture: ComponentFixture<APODPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APODPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(APODPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
