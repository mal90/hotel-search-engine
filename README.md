# Hotel Search Engine

Simple demo app for retriving list of hotels and it's prices from set of mock APIs.

technologies : Angular 7 , Bootstrap , NG bootstrap

## Following Mock APIs are used to retrive sample set of data

* Static data:   
  * https://5c08f37bea3172001389ccbd.mockapi.io/hotels/tokyo

* Prices:
 * USD: http://5c08f37bea3172001389ccbd.mockapi.io/hotels/tokyo/1/USD
 * SGD: http://5c08f37bea3172001389ccbd.mockapi.io/hotels/tokyo/1/SGD
 * CNY: http://5c08f37bea3172001389ccbd.mockapi.io/hotels/tokyo/1/CNY
 * KRW: http://5c08f37bea3172001389ccbd.mockapi.io/hotels/tokyo/1/KRW



## How to run

Locally

Make sure you have installed Angular 7 globally

* clone repository
* npm install
* ng serve
* access the application at http://localhost:4200

Using Docker Compose

Make sure you have installed docker in your machine

* clone repository
* place the docker-compose.yml file 1 folder up from the app folder (hotel-search-engine)
* run command : docker-compose up
* access the application at http://localhost:4200


