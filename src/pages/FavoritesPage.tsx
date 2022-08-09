import React from 'react';
import {useAppSelector} from "../hooks/redux";

const FavoritesPage = () => {
  const {favorites} = useAppSelector(state => state.github)
  if (favorites.length === 0) return <p className={`fav-none`}>Список избранного пуст</p>

  return (
    <>
      <ul className={`fav-list`}>
        {favorites.map(fav =>
          <li key={fav}>
            <a href={fav} target={`_blank`}>
              {fav}
            </a>
          </li>
        )}
      </ul>
    </>
  );
};

export default FavoritesPage;
