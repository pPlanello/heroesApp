import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingHeroesComponent } from './adding-heroes.component';

describe('AddingHeroesComponent', () => {
  let component: AddingHeroesComponent;
  let fixture: ComponentFixture<AddingHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
