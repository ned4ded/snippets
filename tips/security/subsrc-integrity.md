# Subresource Integrity

Is a security feature that enables browsers to verify that files they fetch (for example, from a CDN) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched file must match [mozilla.docs](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity).

Exmaple:
``` HTML
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
 ```

An integrity value may contain multiple hashes separated by whitespace. A resource will be loaded if it matches one of those hashes.
``` bash
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

The easiest way to generate file's integrity has is to run command
``` bash
$ cat FILENAME.js | openssl dgst -sha384 -binary | openssl enc -base64 -A         
```

Result is a hash string based on provided file. Use this string to embed it in `<link>` or `<script>` tags with `sha384-` prefix as an `integrity` attributer's content.

Browser checks the integrity before using the file's content and if it fails then the error will occur in console: "None of the “sha384” hashes in the integrity attribute match the content of the subresource."
