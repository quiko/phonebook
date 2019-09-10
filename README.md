# phonebook
## Setup to run locally

This project use Reactjs , node js and MongoDB, 
you will need node js installed on you machine in order to run the project locally.


see https://nodejs.org


###Frontend

enter front directory and run 

```bash
npm install
npm start
```


###Backend

enter back directory, you can either use provided dbUrl, in this case run the following



```bash
npm install
nodemon
```


 ###OR

You can find a [sample .env](docs/sample.env) file in the docs folder.


```sh
MONGODB="mongodb://localhost/contacts"
```

then run the following commands

```bash
npm install
nodemon
```
