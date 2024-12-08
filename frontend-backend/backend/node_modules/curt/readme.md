# curt

adjective

 > rudely brief.

Minify Javascript just enough to be readable and you can write better oneliners.

## Globals

|----------|---------------|
| `curt`   | 'myself' :)   |
| `stdout` | console.log   |
| `stderr` | console.error |
| `_`      | lodash        |
| `_m`     | moment        |

## Prototypes

|----------|-------------------|
| [].each  | [].forEach        |


## Exports

> require("curt").stdin(callback, format)

read everything from stdin and call callback with it.

format: json, null

> require("curt").escape(arg)

Escape argument for bash usage
