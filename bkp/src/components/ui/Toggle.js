import React, { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Toggle = ({ turnOff, turnOn }) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? "bg-blacklight dark:bg-secondary-purpleb" : "bg-black/20 dark:bg-white/20",
            "relative inline-flex h-4 w-7 mr-1 my-1 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-0 "
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={classNames(
              enabled ? "translate-x-3 dark:bg-blacklight" : "translate-x-0 dark:bg-white",
              "pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white  shadow ring-0 transition duration-200 ease-in-out"
            )}
          />
        </Switch>
        {enabled ? <span>{turnOn}</span> : <span>{turnOff}</span>}
      </div>
    </>
  );
};

export default Toggle;
