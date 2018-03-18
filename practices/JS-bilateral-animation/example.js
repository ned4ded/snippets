const settings = {
  duration: 1000,
  className: 'shown',
}

function handleCallbacks(callbacks) {
  if(!callbacks) return;

  if(callbacks instanceof Array) {
    if(!callbacks.length) return;
    const [ first, ...last ] = callbacks;

    first();

    return handleCallbacks(last);
  }

  return callbacks();
}

function animate (el, { forward, reverse }) {
  const e = $( el );

  if(e.hasClass(settings.Name)) {
    if(reverse && reverse.before) handleCallbacks(reverse.before);

    e.animate({
      /* jQuery animation settings */
    }, settings.duration, function() {
      if(reverse && reverse.after) handleCallbacks(reverse.after);
      e.removeClass(settings.Name);
    })

  } else {
    if(forward && forward.before) handleCallbacks(forward.before);
    e.animate({
      /* jQuery animation settings */
    }, settings.duration, function() {
      e.addClass(settings.Name);
      if(forward && forward.after) handleCallbacks(forward.after);
    });
  }
}
