// import "solid-js";
/** @jsxImportSource solid-js */
import "../tailwind.css";
import { createSignal } from "solid-js";
import { navLinks } from "../utils/constants";
export default function Navbar() {
  const [active, setActive] = createSignal("");

  return (
    <nav class="flex items-center sm:bg-transparent w-full p-6 top-0 z-10 fixed">
      <div className="flex justify-between w-full max-w-7xl sm:opacity-100 mx-auto">
        <div class="flex items-center flex-shrink-0">
          <img src="favicon.svg" alt="Logo" class="h-8" />
        </div>
        <div class="block sm:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
        <div class="block sm:items-center sm:w-auto">
          <ul class="sm:flex-grow space-x-8 sm:justify-end">
            <For each={navLinks}>
              {(link) => (
                <li
                  // class="block capitalize sm:inline-block sm:mt-0 hover:text-gray-400"
                  class={`${
                    // TODO: reverse the hover effect
                    active() === link.title ? "text-gray-400" : "text-white"
                  } capitalize hover:text-gray-400 text-[18px] font-medium cursor-pointer block sm:inline-block`}
                  onClick={() => setActive(link.title)}
                >
                  <a href={link.href}>{link.title}</a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </nav>
  );
}
