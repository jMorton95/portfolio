(function(l) {
  if (l.search[1] === '/' ) {
    let decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null as any,
        l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))

export {}