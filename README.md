# Guideup 
An app where travelers can find a local guide at a desired destination in order to enjoy from an authentic tour.

Technologies:\
Front-end : React , Redux, Sass ,HTML5, Material-ui, Semantic-ui.\
Back-end : Node.js ,MongoDB ,Express, Socket.io-client

![Image of guideup overview](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583351041/bty9kjh68aq4c00b97es.png)

View of popular destinations:

![Image of guideup overview](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583351161/fgfaqp7yyiinw48wokka.png)

View of popular guides:

![Image of guideup overview](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583354332/t6xgrqg40eievrzjhgmq.png)

This view is dynamic, according to the reviews of the guide. If the guide has above to 4 stars, you might see him on the homepage. 
Because we have a lot of guides, it is possible that there will be more than 8 guides that has above 4 stars. We chose to limit the view 
to 8 guides.

By clicking on one of the cities, you will be able to see filtered guides by the city, for example, Paris:

![Image of filter](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583351437/ykzfvl8prkd9x6nb0s7s.png)

You will get the same page if you will filter from the header. Actually, our search filter is a reusable component.
Every guide has some hobbies. In order to find the best guide for you, you can filter by hobbies, like food, nightlife, shopping, etc.
If you decided to look for guides in Paris, but you regret, you can always filter by other city. Filter by hobbies will be cleared every new search.

By clicking on guide, you will be able to read about him, such his work, hobbies, places he recommends about them. 

![Image of guide](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583354912/atkwug4eflfwny1gz199.png)

currently our site supports in guest mode. That's means that as guest you can't book a tour. We do have one guide who already signed in to
our system. On login page use the following details:

Username: Lihi Cohen

Password: 123

The details above will help you to see using of socket.io in the site. Guest can chat with guide in order to ask him whatever he wants about
the requested tour.

![Image of guide](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583355586/zmvaxecybit2qmvxcdnh.png)

This page also contains reviews section, where you can add review and read reviews by other travelers.

![Image of guide](https://res.cloudinary.com/dtwqtpteb/image/upload/v1583355859/yqvmb8wxefwtuzv8wkxp.png)

The app supports various mobile and browsers.
