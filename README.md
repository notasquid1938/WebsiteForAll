# WebsiteForAll

Welcome to the github repo! This the repository for all of globalgoodhub.com 

Technologies used:
-NextJS 12 (Front and Backend Code)
-MongoDB (Database)
-Strapi (Blog CMS)

Website Layout:
-index.js
  -chat.js 
  -blog.js
  -files.js
  -forum.js 
  
Things that need to be setup:

  1.MongoDB
      -Install MongoDB, I used windows with its .msi installer because I had issues running it on ubuntu.
      -Make sure the database "Local" has a collection called "Messages"
  
  2.Strapi
      -Setup the latest verion of strapi and create a new media collection called blogs
      
  3.Profit?? (Ironically, of course)

Notes (for me and you):

To start the website from scratch or after restarting pc/server follow these steps:

    1.Clone the repository and run "npm install"
    2.Start strapi by cd into website\blog and then running "npm run start" (NOTE: If starting Strapi for the first time you will have to change the env.example file to just a .env file to set the necessary api keys
    3.Start MongoDB by running mongod --dbpath "C:\data\db" --logpath "C:\data\log\mongod.log" MAKE SURE MONGOD IS SET AS A SYSTEM VARIABLE AND THAT YOU HAVE MANUALLY CREATED THE REQUIERED FILE PATHS
    4.Run "npm run dev" in the website directory to start the website on port 80 and make it accessible on public ip
      
