
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMnemonicsComponent } from './view-mnemonics.component';

describe('ViewMnemonicsComponent', () => {
  let component: ViewMnemonicsComponent;
  let fixture: ComponentFixture<ViewMnemonicsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMnemonicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMnemonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
