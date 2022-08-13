# SHA256.js

A simple SHA-256 hash functions for JavaScript ES modules supports UTF-8 encoding for browsers and Deno. (using [Web Crypto API](https://developer.mozilla.org/ja/docs/Web/API/Web_Crypto_API), can't use on not SSL & Chrome)

## Other platform

on Node.js [js-sha256](https://www.npmjs.com/package/js-sha256)  
on C# [SHA256 class](https://docs.microsoft.com/ja-jp/dotnet/api/system.security.cryptography.sha256?view=net-6.0)  
on Python3 [hashlib](https://docs.python.org/ja/3/library/hashlib.html)  
on Ruby [SHA256 class](https://docs.ruby-lang.org/ja/latest/class/OpenSSL=3a=3aDigest=3a=3aSHA256.html)  
on PHP [hash](https://www.php.net/manual/ja/function.hash.php)  

## Sample

- [csvhash (CSVの指定項目SH256ハッシュ化変換)](https://code4fukui.github.io/csvhash/)

## Usage

You could use like this:
```js
import { SHA256 } from "https://code4fukui.github.io/SHA256/SHA256.js";

console.log(await SHA256.digest("Message to hash"));
// 
```
