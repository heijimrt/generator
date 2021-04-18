import { strings } from '@angular-devkit/core';
import {
  apply,
  chain,
  MergeStrategy,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url
} from '@angular-devkit/schematics';

import { Schema } from './schema';
const functions = require('./functions');
import { normalize } from 'path';

export function invest(_options: Schema): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const pages = JSON.parse(_options.pages);
    const data = [];

    for (const page of pages) {
      const movePath = (_options.flat) ?
        normalize(_options.path) :
        normalize('./generated/' + strings.dasherize(page.name));

      const sourceParametrizedTemplate = apply(sourceTemplate, [
        template({
          ...page,
          ...strings,
          ...functions
        }),
        move(movePath)
      ]);
  
      data.push(mergeWith(sourceParametrizedTemplate, MergeStrategy.Default));
    }

    return chain(data);
  };
}
