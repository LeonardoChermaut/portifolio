import { Switch, FormControlLabel } from "@material-ui/core";
import { useTheme } from "../../service/ThemeContext";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  const handleChange = (event) => {
    toggleTheme();
  };

  return (
    <FormControlLabel
      control={<Switch checked={theme === "dark"} onChange={handleChange} />}
      label="Tema escuro"
    />
  );
};
