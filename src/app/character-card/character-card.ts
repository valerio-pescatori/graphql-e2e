import { Component, input } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { TooltipModule } from 'primeng/tooltip';
import { Character } from '../homepage/query/getCharacters';

@Component({
  selector: 'app-character-card',
  imports: [TagModule, TooltipModule],
  templateUrl: './character-card.html',
})
export class CharacterCard {
  character = input.required<Character>();
}
