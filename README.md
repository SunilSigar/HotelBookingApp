# Project Screenshot
![webp net-gifmaker 3](https://user-images.githubusercontent.com/11215821/37727013-cb5cd778-2d5c-11e8-9e01-24e415c314be.gif)

## Setup Mongo Database

Step1. create data/db folder in c drive. Create database using "use databaseName" command in mongo Note: ignore outer quotation.

Step2. create collection using "db.createCollection("collectionName")" Note: ignore outer quotation.

Step3. Insert data:
			db.hotels.insert([
			{
			id:7,
			name:'Taj Falaknuma Palace', 
			address:[
			   {
				   address: 'Hyderabad', 
				   location: "Hyderabad, AP, India", zip:678567
				}
			   ],
			dayRate:40000,
			nightRate:60000
			},
			{
			id:8,
			name:'The Oberoi Grand', 
			address:[
			   {
				   address: 'Kolkata', 
				   location: "Kolkata, WB, India", zip:567456
				}
			   ],
			dayRate:20000,
			nightRate:30000
			}
			]);
      
step4. run server.js file inside assets folder in src folder.
step5. rurn angular project.
# HotelBookingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

