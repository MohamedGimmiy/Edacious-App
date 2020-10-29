import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllLatestRecipesPage } from './all-latest-recipes.page';

describe('AllLatestRecipesPage', () => {
  let component: AllLatestRecipesPage;
  let fixture: ComponentFixture<AllLatestRecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLatestRecipesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllLatestRecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
