import React, {useEffect} from 'react';
import {useLazyGetUserReposQuery, useSearchUsersQuery} from '../store/github/github.api';
import {useDebounce} from "../hooks/debounce";
import RepoCard from "../components/RepoCard";

const HomePage = () => {
  const [search, setSearch] = React.useState(``)
  const [dropdown, setDropdown] = React.useState(false)
  const inputText = useDebounce(search)

  const {isLoading, isError, data} = useSearchUsersQuery(inputText, {
    skip: inputText.length < 3,
    refetchOnFocus: true
  })
  const [fetchRepos, {isLoading: isLoadingRepos, data: repos}] = useLazyGetUserReposQuery()

  useEffect(() => {
    setDropdown(inputText.length > 3 && data?.length! > 0)
  }, [inputText, data])

  const clickHandler = (userName: string) => {
    fetchRepos(userName)
    setDropdown(false)
  }

  return (
    <div className={`home-page`}>
      {isError && <p>Что-то пошло не так...</p>}

      <div className={`input-home`}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="text"
          className={`input-home-1`}
          placeholder={`Search for gitHub username...`}
        />
        {dropdown && <ul className={`input-home-2`}>
          {isLoading && <p>Идёт загрузка</p>}
          {data?.map(user =>
            <li onClick={() => clickHandler(user.login)} key={user.id} className={`li-item`}>
              {user.login}
            </li>
          )}
        </ul>}

        <div>
          {isLoadingRepos && <p>Идёт загрузка</p>}
          {repos?.map(repo =>
            <RepoCard key={repo.id} repo={repo}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
