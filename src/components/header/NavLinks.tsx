// import "solid-js";
/** @jsxImportSource solid-js */
import { For, createSignal, onMount } from "solid-js";
import { navLinks } from "@lib/constants";
import "@styles/logo.css";
import { handleBurgerClick, handleNavClick } from "@lib/utils";
export default function Navbar() {
  const [active, setActive] = createSignal("/");

  onMount(() => {
    setActive(window.location.pathname);
  });

  return (
    <nav
      class="sm:fixed sm:top-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:z-50"
      id="nav-links"
    >
      <ul class="sm:flex sm:gap-x-1 lg:gap-x-5 sm:backdrop-blur-3xl sm:rounded-full sm:p-2.5 transition ease-in-out sm:bg-cyan-300/10">
        <For each={navLinks}>
          {(link) => (
            <li
              // class="block capitalize sm:inline-block sm:mt-0 hover:text-gray-400"
              // TODO: for some reason JS not working
              // TODO: reverse the hover effect
              class={`${
                active() === link.href ? "sm:bg-cyan-400/10" : ""
              } capitalize text-cyan-100 sm:rounded-full cursor-pointer transition duration-200 ease-in-out sm:px-3 md:px-4 lg:px-5 sm:py-1 md:py-1.5 sm:hover:bg-cyan-400/5`}
              onClick={() => {
                // if clicked on the active link, close the menu
                // if (active() === link.href) {
                //   handleBurgerClick();
                // }
                handleNavClick();
              }}
            >
              <a href={link.href}>{link.title}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
}
