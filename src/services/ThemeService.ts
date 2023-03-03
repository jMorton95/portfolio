const themeOptions = {
  dark: "dark",
  light: "light"
};

const metaColorScheme = document.querySelector('meta[name="color-scheme"]');

const toggleTheme = (themeElement: HTMLElement) => {
  if (themeElement.classList.contains(themeOptions.dark)){
    changeTheme(themeElement, themeOptions.light)
  } else {
    changeTheme(themeElement, themeOptions.dark);
  } 

  metaColorScheme?.setAttribute('content', localStorage.theme);
};

const changeTheme = (themeElement: HTMLElement, theme: string) => {
  themeElement.classList.value = theme;
  localStorage.setItem("theme", theme);
};

const setStartupTheme = () => { 
  document.body.classList.value = localStorage.theme;
  metaColorScheme?.setAttribute('content', localStorage.theme);
};

export {toggleTheme, changeTheme, setStartupTheme}