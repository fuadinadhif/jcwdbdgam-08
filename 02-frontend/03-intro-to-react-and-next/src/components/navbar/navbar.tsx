import { Navlink } from "../navlink/navlink";

export function Navbar() {
  return (
    <nav>
      <ul>
        <Navlink linkHref="/" linkContent="Home" />
        <Navlink linkHref="/about-us" linkContent="About Us" />
        <Navlink linkHref="/services" linkContent="Services" />
        <Navlink linkHref="/blog" linkContent="Blog" />
      </ul>
    </nav>
  );
}
