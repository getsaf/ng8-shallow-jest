import { Shallow } from 'shallow-render';
import { AppComponent } from './app.component';
import { AppModule } from 'src/app/app.module';

describe('AppComponent', () => {
  let shallow: Shallow<AppComponent>;
  beforeEach(() => {
    shallow = new Shallow(AppComponent, AppModule);
  });

  it('displays an image', async () => {
    const {find} = await shallow.render({bind: {thingy: 'My thingy'}});
    expect(find('img')).toHaveFound(1);
  });
});
