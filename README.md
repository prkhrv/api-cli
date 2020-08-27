# api-cli :computer:

A CLI tool Which writes all the boiler-plate API and install Dependencies ```Express body-parser```  and Selected ORM which can be selected from the list.

## ORM SUPPORT

- Mongoose :heavy_check_mark:
- TypeORM (coming soon) :warning:

## Installation
Either through cloning with git or by using npm (the recommended way):
```
npm install -g @prkhrv/api-cli

```
And api-cli will be installed globally to your system path.

## Usage
 api-cli requires ORM you want to use and it also initializes package.json and installs all the basic dependecies for the Database/ORM.
 
 ```
$ api-cli --install

? Please choose which database ORM to use (Use arrow keys)
❯ mongoose 
? Initialize npm? (y/N) 

  _ __  _ __| | _| |__  _ ____   __
 | '_ \| '__| |/ / '_ \| '__\ \ / /
 | |_) | |  |   <| | | | |   \ V / 
 | .__/|_|  |_|\_\_| |_|_|    \_/  
 |_|                               
  ✔ Greetings
  ✔ Initialize npm
  ✔ Copy project files
  ✔ Install dependencies
DONE Project ready


 ```
 
 When all the Processes are Completed try running server 
 ```
 node index
 ```
 ## Config
 
 **Mongoose**
 open ./config/database.config.js and simply add Your MongoDB connection URL.
 ```js
 module.exports = {
    url: 'mongodb://localhost:27017/TestDB' //YOUR LINK HERE
}

 
 ```
 
## License

MIT http://rem.mit-license.org

## Contact

[PRAKHAR VARSHNEY](https://github.com/prkhrv)
 
