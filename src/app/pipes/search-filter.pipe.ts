import { Pipe, PipeTransform } from '@angular/core';
import { Stade } from '../stade.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {
  transform(list: Stade[] | null | undefined, filterText: string): Stade[] {
    const filter = (filterText ?? '').trim().toLocaleLowerCase();
    if (!list) {
      return [];
    }
    if (!filter) {
      return list;
    }
    return list.filter(stade =>
      stade.nomStade.toLocaleLowerCase().includes(filter)
    );
  }
}
