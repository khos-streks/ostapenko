let i=0;document.body.onkeydown=e=>{document.querySelector(`#block-${i}`).textContent=e.key;i=i>=3?1:i+1}
