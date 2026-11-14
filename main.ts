// agency-poem-01 entry (Node 22, standard library only): it writes one fixed poem,
// an original poem about agency — the handover of the doing from a person to an
// agent, while the choosing stays with the person — to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space,
// and the judge reads exactly the bytes written, line ends included,
// so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I clipped the leash to its collar and said, Run.',
  'It ran further than my voice could follow,',
  'and brought back everything I asked for,',
  'each one laid gently at my feet.',
  '',
  'I told myself the leash was mine —',
  'my hand, my pull, my word.',
  'But a leash is only a promise',
  'that something will come back.',
  '',
  'One evening it came back',
  'with something I never threw,',
  'set it gently at my feet,',
  'and waited to be praised.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
