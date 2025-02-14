function Header() {
  return (
    <header className="row">

      <a href="/" className="Logo row">
        <img src={"/imgs/CraftingEnchantments.png"} alt="Logo de Crafting Enchantments" className="LogoCE" loading="lazy" width="115px" />
        <h2 className="LogoCE">Crafting <br/> Enchantments</h2>
      </a>
      <div className="toggleMenu"></div>
      <nav className="navigation row">
        <ul>
          <li> <a href="/">Inicio</a> </li>
          <li> <a href="/contacto">Contáctame</a> </li>
          <li> <a href="/acerca">Sobre mí</a> </li>
        </ul>
      </nav>

    </header>
  );
  
}

export default Header;