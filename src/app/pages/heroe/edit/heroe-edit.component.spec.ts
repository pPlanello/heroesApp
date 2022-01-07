import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeEditComponent } from './heroe-edit.component';

describe('EditComponent', () => {
  let component: HeroeEditComponent;
  let fixture: ComponentFixture<HeroeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
