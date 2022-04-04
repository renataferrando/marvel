import React, { useEffect } from "react";

function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);

  useEffect(() => {
    const keyUp = (event) => {
      if (event.key !== "Escape") {
        return;
      }
      handler(event);
    };

    document.addEventListener("keyup", keyUp);
    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  }, [ref, handler]);
}

export default useClickOutside;
