# dynaphore-cryptor

## Simple init
```
var Cryptor = require('dynaphore-cryptor');

var c = new Cryptor(); //default algo : aes-256-cbc and password : ''
console.log(c.encrypt('123456'));
console.log(c.decrypt('OTRiYjA3ZDAxODFlZTIwNTU0M2RmMGUzZGRlOWI4Mzg='));

```

## Using algo and password or secret key
```
//using algo and password or secret key
var c = new Cryptor('aes-256-ctr', 'Tuudada8HKGYGagdavb184');

```