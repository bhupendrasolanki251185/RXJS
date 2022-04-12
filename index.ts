import './style.css';

import { of, map, Observable, range } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

// of('World')
//   .pipe(map((name) => `Hello, ${name}!`))
//   .subscribe(console.log);

const source: Observable<number> = range(0,10);
source.pipe(
  tap(_ => console.log("printing..")),
  map(val => val +1),
  filter(val => val < 5)
)
.subscribe(val => console.log(val));

// Open the console in the bottom right to see results.
