const themeOptions = {
  dark: "dark",
  light: "light",
};

const localStorageRef = window.localStorage;

const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

const toggleTheme = (
  themeElement: HTMLElement,
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  if (themeElement.classList.contains(themeOptions.dark)) {
    changeTheme(themeElement, themeOptions.light);
  } else {
    changeTheme(themeElement, themeOptions.dark);
  }

  metaColorScheme?.setAttribute("content", localStorageRef.theme);

  setEventTargetThemeClass(e);
};

const setEventTargetThemeClass = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  if (!(e.target instanceof Element)) return;

  for (let theme in themeOptions) {
    if (e.target.classList.contains(theme)) {
      e.target.classList.remove(theme);
    }
  }

  e.target.classList.add(localStorageRef.theme);
};

const changeTheme = (themeElement: HTMLElement, theme: string) => {
  themeElement.classList.value = theme;
  localStorageRef.setItem("theme", theme);
};

const setStartupTheme = () => {
  document.body.classList.value = localStorageRef.theme;
  metaColorScheme?.setAttribute("content", localStorageRef.theme);
};

export { toggleTheme, changeTheme, setStartupTheme };
