import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipe.PageComponent } from './add-recipe.page.component';

describe('AddRecipe.PageComponent', () => {
  let component: AddRecipe.PageComponent;
  let fixture: ComponentFixture<AddRecipe.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipe.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecipe.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
