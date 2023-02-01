import { FunctionComponent, useState } from "react";

export const LoginForm: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez vous</h2>
      <input
        type="text"
        name="name"
        value={inputValue}
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      />
      <label htmlFor="submit"></label>
      <button name="submit" type="submit">
        Accédez à votre espace
      </button>
    </form>
  );
};
