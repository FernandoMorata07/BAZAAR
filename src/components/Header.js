import { Auth } from "./Auth";

export const Header = () => {
  return (
    <header>
      <h1>Bazaar</h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
