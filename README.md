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

To start the website after restarting pc/server follow these steps:

    1.Start strapi by cd into website\blog and then running "npm run start"
    2.Start MongoDB by 
    3.Run "npm run dev" in the website directory to start the website on port 80 and make it accessible on public ip
      
