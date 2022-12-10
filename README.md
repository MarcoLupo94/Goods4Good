# Goods 4 Good

<p align="center">
  <img src="images/Goods+4+Good+(2).jpg" />
</p>



Goods4Good is a fully responsive web application that helps people finding charitable causes and donate to them.  User can donate in three different ways:

1. Buying clothes on the charity's shop.
2. Donate cash to the chosen charity.
3. Buy clothes on the charity e-shop page.



## Screenshots

<p align="center">
  <img src="mobile.png" />
</p>



## Getting started

Except for the regular suspects; git, Node, npm, you need these things to work on the Goods4Good app.


## Installation

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/MarcoLupo94/Goods4Good.git
   cd goods4good
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. In the 2 environments folders ````apps/api/src/environments/```` & ````apps/charity-app/src/environments/``` create two different files called environment.ts.

4. Populate these 2 files with the right keys by following this file pattern:
 ```
  export const environment = {
  production: false,
  STRIPE_KEY:'Stripe API public key',
  STRIPE_SECRET:'Stripe API Test key',
  API_DB: 'http://localhost:3333/api/',
  AUTH_CLIENTID: '',
  AUTH_DOMAIN: '',
  MONGO_DB:'Mongo Atlas or MongoDb connection link',
  CLIENT_URL: 'http://localhost:4200/',
  LOGO: 'https://images-charity-app.s3.eu-west-1.amazonaws.com/Goods+4+Good+(2).jpg',
  Access_Key_ID_aws: 'AWS Access key ID',
  Secret_Access_Key_aws: 'AWS Secret key ',
  AWS_S3_BUCKET: 'name of aws bucket'
};
```


5. While in the root folder, run ````npm run start```` will build the JS bundle for your app.

6. Now you can launch the app! ````npm run serve:all```` will launch back-end & front-end concurrently.

7. You can also run them separately ````npm run serve:api```` & ````npm run serve:web````.


## Tech Stack

* [Angular](https://angular.io/)
* [Typescript](https://www.typescriptlang.org/)
* [NestJs](https://nestjs.com/)
* [Nx](https://nx.dev/)

* Other dependencies:
  * [AWS S3 Buckets](https://aws.amazon.com/s3/)
  * [Stripe API](https://stripe.com/en-gb)
  * [Auth0](https://auth0.com/)
  
 ## Data Sources

[every.org](https://www.every.org/) API for charities and fundraisers.
