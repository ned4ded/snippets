# Fabric
Fabric.js is a powerful and simple Javascript HTML5 canvas library. [Read more](http://fabricjs.com/docs/);

## Installation
Download from [CDN](https://cdnjs.cloudflare.com/ajax/libs/fabric.js/2.2.0/fabric.min.js);

## Easel
Fabric is more then mere Canvas-Paint thing, but I developed special micro library for Fabric Drawning Mode: [easel](./easel.basic.js);

Used in project: [sahalin](https://github.com/ned4ded/sahalin);

**Key Feature:**
- no jQuery, only Fabric.js;
- history managing;
- fabric state export;
- blob export;

**Warning!** jQuery could be used in example code, but it is not necessary.

### Usage
1. Running:
``` Javascript
  const easel = new Easel({
    canvasId: 'canvas',
    config: {
      brushColor: '#000000',
      brushSize: 10,
    }
  });
```

1. If fabric doesn't want to fit in whole canvas display, use `resize` method to resize canvas manually:
``` Javascript
  const frame = document.getElementById('frame');
  const frameHeight = () => frame.clientHeight;
  const frameWidth = () => frame.clientWidth;

  const resize = () => easel.resize(frameHeight(), frameWidth());

  resize();

  $( window ).resize( resize );
```

1. Clearing canvas:
``` Javascript
  easel.clear()
```
1. Getting blob object. Because of getting blob object is async function, you have to provide callback to handle blob-object; For example, save it with ajax:
``` Javascript
  easel.getBlob((b) => {
    const formdata = new FormData();
    formdata.append('SomeName', b);

    $.ajax({
      url: '/upload',
      type: 'post',
      data: formdata,
      processData: false,
      contentType: false,
    });
  });
```
1. `RenderFromJson` method provides functionality to render saved fabricjs object on used canvas;

1. `hasHistory` method returns `true` or `false` depending on history existence; It could be useful for disabling/enabling buttons.

1. `renderLastState` restores last saved fabric's state and renders it on canvas. It destroys current state, which couldn't be evoked again. Useful for undo button. Callback could be passed as signature, it would be executed after rendering last state and saving renewal history:
``` Javascript
  const undo = document.getElementById('undo');

  const historyCallback = () => {
    if(!easel.hasHistory()) {
      undo.setAttribute('disabled', true);
    } else {
      undo.removeAttribute('disabled');
    }
  }

  $( undo ).click( () => easel.renderLastState(historyCallback) );
```

1. `listenState` and `listenMouse` trigger on `path:created` and `mouse:down` fabric's events respectively.
