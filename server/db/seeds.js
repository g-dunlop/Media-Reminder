use userMovies;
db.dropDatabase();

db.userMovies.insertMany([

    {
        username:"Quentin",
        email:"Quentin@pulpdogs.com",
        watched: [
            {
                imdbID: "tt0072890",
                Title: "Dog Day Afternoon",
                Poster: "https://m.media-amazon.com/images/M/MV5BODExZmE2ZWItYTIzOC00MzI1LTgyNTktMDBhNmFhY2Y4OTQ3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                Year: "1975",
                Type: "movie",
                Rating: 0
            },
            {
                imdbID: "tt10293406",
                Title: "The Power of the Dog",
                Poster: "https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
                Year: "2021",
                Type: "movie",
                Rating: 0
            }
          
        ],
        towatch:[
            {
                imdbID: "tt0312528",
                Title: "The Cat in the Hat",
                Poster: "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_SX300.jpg",
                Year: "2003",
                Type: "movie",
                Rating: 0
            },
            {
                imdbID: "tt0051459",
                Title: "Cat on a Hot Tin Roof",
                Poster: "https://m.media-amazon.com/images/M/MV5BMzFhNTMwNDMtZjY3Yy00NzY3LWI1ZWQtZTQxMWJmODVhZWFkXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg",
                Year: "1958",
                Type: "movie",
                Rating: 0
            }
        ]
    }

]);