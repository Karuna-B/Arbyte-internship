import Billboard from "../components/Billboard";
import NavBar from "../components/NavBar";
import MovieList from "../components/MovieList";
import useMoviesList from "../hooks/useMoviesList";
import { useState, useRef, useCallback } from "react";
import LoadingCards from "../components/LoadingCards";
import { useSelector, UseSelector } from "react-redux";
import { RootState } from "../app/store";

export default function BrowsePage() {
  const [offset, setOffset] = useState(0);
  const { data, loading, error } = useMoviesList(offset);

  const observer = useRef<null | IntersectionObserver>(null);

  const {} = useSelector(
    (state: RootState) => state.user.value
  );

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setOffset(offset + 12);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );
  return (
    <div>
      <NavBar />
      <Billboard />
      <div className="pb-5">
        {error && <p>{error}</p>}
        {data && <MovieList movies={data} lastElementRef={lastElementRef} />}
        {loading ? <LoadingCards /> : null}
      </div>
    </div>
  );
}
