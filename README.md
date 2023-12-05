# Movie Search App

Welcome to the Movie Search App! This web application allows users to search for movies and explore additional information such as cast and reviews.

## Features

- **Search Movies:** Use the search bar to find movies based on your queries.
- **Movie Details:** Click on a movie to view detailed information, including the title, overview, genres, and more.
- **Additional Information:** Explore cast details and reviews for each movie.

## Technologies Used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) for server-side rendering and routing
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [The Movie Database (TMDb) API](https://www.themoviedb.org/documentation/api) for movie data

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-search-app.git
   ```

2. Install dependencies:

   ```bash
   cd movie-search-app
   npm install
   ```

3. Set up your API key:

   - Obtain an API key from [TMDb](https://www.themoviedb.org/documentation/api).
   - Create a `.env.local` file in the project root and add:

     ```plaintext
     TMDB_API_KEY=your-api-key
     ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `pages/`: Contains Next.js pages for routing.
- `components/`: Reusable React components.
- `styles/`: Stylesheets using Tailwind CSS.
- `api/`: API functions to fetch movie data.

## Contributing

Feel free to contribute to the project! If you find any issues or have suggestions, please open an [issue](https://github.com/your-username/movie-search-app/issues) or create a [pull request](https://github.com/your-username/movie-search-app/pulls).

Happy movie searching! 🍿🎬
