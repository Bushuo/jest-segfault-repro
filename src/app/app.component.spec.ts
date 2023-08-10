import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

it('renders the app', async () => {
  await render(AppComponent, {
    imports: [AppModule],
  });

  expect(
    screen.getByRole('heading', {
      name: 'jest-segfault-repro',
    })
  ).toBeVisible();
});
