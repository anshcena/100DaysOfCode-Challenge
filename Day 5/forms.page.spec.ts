import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormsPage } from './forms.page';

describe('FormsPage', () => {
  let component: FormsPage;
  let fixture: ComponentFixture<FormsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
