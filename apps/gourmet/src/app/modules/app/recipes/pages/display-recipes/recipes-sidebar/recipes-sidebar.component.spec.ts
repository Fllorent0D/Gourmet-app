import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesSidebarComponent } from './recipes-sidebar.component';

describe('RecipesSidebarComponent', () => {
  let component: RecipesSidebarComponent;
  let fixture: ComponentFixture<RecipesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipesSidebarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
