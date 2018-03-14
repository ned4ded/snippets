(function() {
  const $container = $('#a-container');
  const $input = $('#a-input');
  const $suggestions = $('#a-list');
  if(!$container || !$input || !$suggestions) return;
  const duration = 500;

  $.getJSON("enter/your/url.json", function(json) { // edit path
    const parsed = json.map(object => {
      return { value: object['city'] }
    });

    if(parsed.length === 0) return;

    $input.autocomplete({
      lookup: parsed,
      lookupLimit: 5,
      appendTo: $suggestions,
      width: '100%',
      zIndex: 1030,
      onSelect: () => $container.trigger("submit"),
    });
  });
}());
