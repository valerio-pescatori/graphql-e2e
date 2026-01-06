import { FormControl } from '@angular/forms';

export type ToForm<T> = {
  [K in keyof T]: FormControl<T[K]>;
};
