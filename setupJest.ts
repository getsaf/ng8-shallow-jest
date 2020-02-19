import 'jest-preset-angular';
import { Shallow } from 'shallow-render';
beforeEach(() => console.log('Works!'));
Shallow.neverMock(class {});
