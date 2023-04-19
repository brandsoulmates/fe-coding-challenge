import * as React from "react"
import { Link } from "gatsby"
import { Router } from "@reach/router"
import clsx from "clsx"

import Layout from "../../components/Layout"
import ApiService from "../../services/api"

export const ProfileView = ({ username }) => {
  const [user, setUser] = React.useState(null)
  const [prevUser, setPrevUser] = React.useState(null)
  const [nextUser, setNextUser] = React.useState(null)

  React.useEffect(() => {
    const fetchUser = async (name) => {
      const user = await ApiService.getUserDetails(name)
      setUser(user)
    }

    fetchUser(username)
  }, [username])

  React.useEffect(() => {
    const fetchUsers = async (currentUser) => {
      const params = {
        since: currentUser.id > 1 ? currentUser.id - 2 : 0,
        per_page: currentUser.id === 1 ? 2 : 3
      }
      const users = await ApiService.getUsers(params)
      if (currentUser.id === 1 && users.length === 2) {
        setPrevUser(null)
        setNextUser(users[1])
      }
      if (currentUser.id > 1 && users.length === 2) {
        setPrevUser(users[0])
        setNextUser(null)
      }
      if (users.length === 3) {
        setPrevUser(users[0])
        setNextUser(users[2])
      }
    }

    if (user) {
      fetchUsers(user)
    }
  }, [user])

  return (
    <Layout>
      {user ? (
        <>
          <div className="flex mt-6 py-8 pl-8 pr-16 gap-20 bg-white border-2 border-blue-500 rounded-2xl shadow-lg">
            <div className="text-center">
              <img src={user.avatar_url} alt={user.login} className="mx-auto w-48 h-48 rounded-full" />
              <h1 className="mt-4 text-xl font-medium">{user.name}</h1>
              <p className="mb-3">{user.login}</p>
              <p>{user.location}</p>
              <a href={user.html_url} className="text-blue-500 underline">{user.html_url}</a>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex mt-12 w-full justify-between">
                <div className="text-center">
                  <p className="text-4xl font-light">{user.public_gists}</p>
                  <h2 className="mt-2 text-xl font-medium">Public Gists</h2>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light">{user.public_repos}</p>
                  <h2 className="mt-2 text-xl font-medium">Public Repos</h2>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light">{user.followers}</p>
                  <h2 className="mt-2 text-xl font-medium">Followers</h2>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-light">{user.following}</p>
                  <h2 className="mt-2 text-xl font-medium">Following</h2>
                </div>
              </div>
              <div className="content">
                <p>
                  <b>Biography: </b>
                  {user.bio}
                </p>
                <p>
                  <b>Company: </b>
                  {user.company}
                </p>
                <p>
                  <b>Twitter: </b>
                  <a href={`https://twitter.com/${user.twitter_username}`} className="text-blue-500 underline">
                    {user.twitter_username}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex mt-4 justify-center items-center gap-8">
            <Link
              to={`/user/${prevUser?.login || ''}`}
              className={clsx('text-white', { 'opacity-70 pointer-events-none': !prevUser })}
            >
              {'< Back'}
            </Link>
            <div className="w-px h-5 bg-white" />
            <Link
              to={`/user/${nextUser?.login || ''}`}
              className={clsx('text-white', { 'opacity-70 pointer-events-none': !nextUser })}
            >
              {'Next >'}
            </Link>
          </div>
        </>
      ) : <p>loading...</p>}
    </Layout>
  )
}

const UserPage = () => {
  return (
    <Router>
      <ProfileView path="/user/:username" />
    </Router>
  )  
}

export default UserPage
