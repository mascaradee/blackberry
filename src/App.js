import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/**
 * axios = fetch 역할
 * async-await 특정 역할이 끝날때까지 기다려라
 *
 * TIP
 * className 필수인 버전인거 같음
 * map 내 화살표 함수 사용 시 return문 꼭 필요
 * style component 수업 듣기
 * style ={{}}  더블로 적용해야 함.
 */
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  /**
   * const [isLoading, setLoading] = useState(true)
   * const [movies, setMovies] = useState([]])
   */
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false }); //  movies: movies => 이름과 값이 같으면 하나만 쓴다
  };
  /**
   * fetch를 이용했고
   */
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; // ES6  문법 / state 변수명 스펠링 유의할것
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading... </span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
  /**
   * render() 함수도 계속 호출하지 않았음
   */
}

export default App;
