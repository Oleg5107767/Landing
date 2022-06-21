


   //export  function handleAnchor  (anchorId)  {
   //const yOffset = -10; 
   //const element = document.querySelector(anchorId);
   //const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
   //window.scrollTo({top: y, behavior: 'smooth'});
   //}
    export  function handleAnchor  (anchorId)  {
        const anchor =  document.querySelector(anchorId)
    
        if (anchor) {
          anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    