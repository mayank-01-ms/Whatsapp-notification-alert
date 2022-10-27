let observer;

if (typeof window.injected === "undefined") { // Inject guard for #40
  window.injected = true;

  const target = document.querySelector('head > title');

  observer = new window.MutationObserver(
    function(mutations) {
      mutations.forEach(
        function(mutation) {
          notify(mutation.target.textContent);
        }
      );
    }
  );

  observer.observe(
    target,
    {
      subtree: true,
      characterData: true,
      childList: true
    }
  );

  notify(target.textContent);

}

let oldCount = 0;
function notify(title) {
  const matches = title.match(/(\d+)/);
    if (matches) {
        let newCount = matches[0];
        if(newCount > oldCount){
            // play the audio
            try {
                const audio = new Audio(chrome.runtime.getURL('audios/notification.mp3'));
                audio.play();
            } catch (e) { 
                console.warn(e);
            }
        }
        // update the count everytime
        oldCount = newCount;
    }
}