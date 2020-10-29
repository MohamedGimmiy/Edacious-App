import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindUsPage } from './find-us.page';

describe('FindUsPage', () => {
  let component: FindUsPage;
  let fixture: ComponentFixture<FindUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
