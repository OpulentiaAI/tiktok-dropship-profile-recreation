import { Theme } from './settings/types';
import { DropshipTikTokProfile } from './components/generated/DropshipTikTokProfile';

let theme: Theme = 'dark';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <DropshipTikTokProfile />
    </>
  ); // %EXPORT_STATEMENT%
}

export default App;
