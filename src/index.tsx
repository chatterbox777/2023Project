import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ErrorPage } from 'widgets/ErrorPage';
import { StoreProvider } from 'app/providers/StoreProvider';
import { App } from './app/App';
import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
