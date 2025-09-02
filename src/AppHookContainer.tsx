import { AppRouter } from './AppRouter';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import { ModalProvider } from './components/Modal/context';

function AppHookContainer() {
  return (
    <ErrorBoundary>
        <ModalProvider>
            <App>
                <AppRouter />
            </App>
        </ModalProvider>
    </ErrorBoundary>
  )
}

export default AppHookContainer
