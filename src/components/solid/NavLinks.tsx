import { For, createSignal, onMount } from "solid-js";
import { navLinks } from "@utils/constants";
import "@styles/logo.css";
export default function Navbar() {
  const [active, setActive] = createSignal("/");

  onMount(() => {
    setActive(window.location.pathname);
  });

  return (
    <nav
      class=""
      id="nav-links"
    >
      <ul class="sm:space-x-8">
        <For each={navLinks}>
          {(link) => (
            <li
              // class="block capitalize sm:inline-block sm:mt-0 hover:text-gray-400"
              // TODO: for some reason JS not working
              // TODO: reverse the hover effect
              class={`${
                active() === link.href ? "text-cyan-400" : "text-cyan-100"
              } capitalize hover:text-cyan-300 text-[18px] font-medium cursor-pointer block sm:inline-block`}
              //onClick={() => setActive(link.href)}
            >
              <a href={link.href}>{link.title}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
