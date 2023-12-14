# Readme
## Overview
This project implements an online image search engine driven by the [Unsplash](https://unsplash.com) API. 
Users can search images that match their input texts and save the images in the local database. 
## Usage
This project is containerized with Docker. Users can run `docker-compose up` to employ this project. 
In order to utilize the Unsplash API and local database, users need to make a file `.env.local` under the `api` folder. 
The format of the file `.env.local` is as follows:
```
UNSPLASH_KEY = your-api-key
MONGO_USERNAME = root
MONGO_PASSWORD = very-strong-db-password
```
Please obtain `your-api-key` from the Unsplash website.
## Example
### Search Images

### Save and Delete Images



