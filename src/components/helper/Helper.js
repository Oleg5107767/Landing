

    export  function handleAnchor  (anchorId)  {
        const anchor =  document.querySelector(anchorId)
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    