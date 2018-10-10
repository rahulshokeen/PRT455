import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMnemonicsComponent } from './add-mnemonics.component';

describe('AddMnemonicsComponent', () => {
  let component: AddMnemonicsComponent;
  let fixture: ComponentFixture<AddMnemonicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMnemonicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMnemonicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
