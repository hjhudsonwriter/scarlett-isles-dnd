(() => {
  const btn = document.getElementById("copyBtn");
  if(!btn) return;

  btn.addEventListener("click", async () => {
    try{
      await navigator.clipboard.writeText(location.href);
      const prev = btn.textContent;
      btn.textContent = "Copied!";
      setTimeout(()=>btn.textContent = prev, 1200);
    }catch(e){
      alert("Could not copy. You can copy the URL from the address bar.");
    }
  });
})();
