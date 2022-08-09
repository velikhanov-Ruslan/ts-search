import React from 'react';
import {IRepo} from "../../models/models";
import classes from "./index.module.scss"
import {useActions} from "../../hooks/actions";
import {useAppSelector} from "../../hooks/redux";

const RepoCard = ({repo}: { repo: IRepo }) => {

  const {addFavorites, removeFavorites} = useActions()

  const {favorites} = useAppSelector(state => state.github)
  const [isFavorite, setIsFavorite] = React.useState(favorites.includes(repo.html_url))

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    addFavorites(repo.html_url)
    setIsFavorite(true)
  }
  const removeFromFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    removeFavorites(repo.html_url)
    setIsFavorite(false)
  }

  return (
    <a href={repo.html_url} target={`_blank`} className={`repo-card`}>
      <h2>{repo.full_name}</h2>
      <p>Forks: <span>{repo.forks}</span></p>
      <p>Watchers: <span>{repo.watchers}</span></p>

      {repo.description &&
      <article>
        {repo.description}
      </article>}

      {!isFavorite && <button onClick={addToFavorite} className={classes.btn}>
        Добавить в избранное
      </button>}

      {isFavorite && <button onClick={removeFromFavorite} className={classes.btn2}>
        Удалить из избранного
      </button>}
    </a>
  );
};

export default RepoCard;
