"use client";

import { useEffect } from "react";

const POLYFILLS_SRC = "https://localstudios.marianaiframes.com/polyfills";
const LOADER_SRC = "https://localstudios.marianaiframes.com/js";

export default function MarianaEmbed({ route }: { route: string }) {
  useEffect(() => {
    const polyfills = document.createElement("script");
    polyfills.src = POLYFILLS_SRC;
    polyfills.async = false;

    const loader = document.createElement("script");
    loader.src = LOADER_SRC;
    loader.async = false;

    polyfills.onload = () => {
      document.body.appendChild(loader);
    };

    document.body.appendChild(polyfills);

    return () => {
      polyfills.remove();
      loader.remove();
    };
  }, []);

  return <div data-mariana-integrations={route} />;
}
