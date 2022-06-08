import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Recipe, RecipeCreateOneGQL} from "../../../../../@generated/graphql";

@Component({
  selector: 'gourmet-app-add-recipe.page',
  templateUrl: './add-recipe.page.component.html',
  styleUrls: ['./add-recipe.page.component.scss']
})
export class AddRecipePageComponent implements OnInit {

  recipeFormGroup: FormGroup<{title: FormControl<string>, description: FormControl<string>}>


  constructor(
    private readonly recipeCreateOneGQL: RecipeCreateOneGQL
  ) {
  }

  ngOnInit(): void {
    this.recipeFormGroup = new FormGroup({
      title: new FormControl<string>('', [Validators.minLength(10), Validators.required]),
      description: new FormControl<string>('', )
    })
  }

  onSave() {
    this.recipeCreateOneGQL.mutate({
      recipeCreateInput: {
        name: this.recipeFormGroup.getRawValue().title,
        description: this.recipeFormGroup.getRawValue().description
      }
    }).subscribe({
      next: (result) => {
        console.log(result)
      }
    })
  }

}
