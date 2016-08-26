whois-microservice
==================

[![NPM version][npm-image]][npm-url]

Very simple whois microservice, web-interface to standart whois command on UNIX-like systems.

Written in JavaScript, powered by [Node.js][nodejs-url] and available as [NPM][npm-home-url] package.

Quick example
-------------

After run the service, type in your browser something like this:

```
http://127.0.0.1:8899/ya.ru
```

And you will see the response as plain text:

```
% By submitting a query to RIPN's Whois Service
% you agree to abide by the following terms of use:
% http://www.ripn.net/about/servpol.html#3.2 (in Russian)
% http://www.ripn.net/about/en/servpol.html#3.2 (in English).

domain:        YA.RU
nserver:       ns1.yandex.ru.
nserver:       ns2.yandex.ru.
state:         REGISTERED, DELEGATED, VERIFIED
org:           YANDEX, LLC.
registrar:     RU-CENTER-RU
admin-contact: https://www.nic.ru/whois
created:       1999.07.12
paid-till:     2017.08.01
free-date:     2017.09.01
source:        TCI

Last updated on 2016.08.26 08:46:32 MSK
```


Installation
------------

``whois`` command must be installed and must be in your ``$PATH``.

Installation with [NPM][npm-home-url] as global module:

```
$ npm i -g whois-microservice
```

Run service
-----------

```
$ whois-microservice
```

Command-line interface, options
-------------------------------

```
$ whois-microservice --help

  Usage: whois-microservice [options]

  Very simple whois microservice, web-interface to standart whois command on UNIX-like systems.

  Options:

    -h, --help             output usage information
    -V, --version          output the version number
    --hostname <hostname>  hostname, 0.0.0.0 by default
    --port <port>          port, 8899 by default
```

License
-------

MIT

[npm-image]: https://img.shields.io/npm/v/whois-microservice.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/whois-microservice
[nodejs-url]: https://nodejs.org/en/
[npm-home-url]: https://www.npmjs.com
