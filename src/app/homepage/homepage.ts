import { Component, inject, Signal, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { TooltipModule } from 'primeng/tooltip';
import { toSignal } from '@angular/core/rxjs-interop';
import { Apollo } from 'apollo-angular';
import { filter, map } from 'rxjs';
import {
  Character,
  GET_CHARACTERS_QUERY,
  CharacterStatus,
  CharacterGender,
  CHARACTER_STATUSES,
  CHARACTER_GENDERS,
} from './query/getCharacters';
import { HomepageForm } from './types/homepage-form';
import { CharacterCard } from '../character-card/character-card';
import { ErrorLike } from '@apollo/client';
import { ToForm } from '../../utils/form';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  imports: [
    CharacterCard,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    SkeletonModule,
    TooltipModule,
  ],
})
export class Homepage {
  private apollo = inject(Apollo);

  readonly loading: Signal<boolean>;
  readonly error: Signal<ErrorLike | null>;
  readonly currentPage = signal(1);
  readonly characters: Signal<Character[]>;
  readonly showAllFilters = signal(false);
  readonly statuses = CHARACTER_STATUSES;
  readonly genders = CHARACTER_GENDERS;
  readonly form: FormGroup;
  readonly statusesOptions = [
    { label: 'Any', value: null as CharacterStatus | null },
    ...this.statuses.map((s) => ({ label: s, value: s })),
  ];
  readonly gendersOptions = [
    { label: 'Any', value: null as CharacterGender | null },
    ...this.genders.map((g) => ({ label: g, value: g })),
  ];

  constructor() {
    const query$ = this.apollo.watchQuery({
      query: GET_CHARACTERS_QUERY,
      variables: { page: this.currentPage() },
    }).valueChanges;

    this.characters = toSignal(
      query$.pipe(
        filter((response) => !!response.data?.characters?.results),
        map((response) => response.data?.characters?.results as Character[])
      ),
      { initialValue: [] as Character[] }
    );

    this.loading = toSignal(query$.pipe(map((response) => response.loading)), {
      initialValue: false,
    });

    this.error = toSignal(query$.pipe(map((response) => response.error ?? null)), {
      initialValue: null,
    });

    this.form = new FormGroup<ToForm<HomepageForm>>({
      searchTerm: new FormControl(),
      status: new FormControl(null as CharacterStatus | null),
      species: new FormControl(null as string | null),
      gender: new FormControl(null as CharacterGender | null),
    });
  }

  range(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }

  toggleShowAllFilters(): void {
    this.showAllFilters.update((value) => !value);
  }

  // Additional effects: subscribe to form changes to apply filters or trigger queries can be added here.
}
