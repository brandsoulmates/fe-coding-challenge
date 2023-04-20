import React from "react"
import { Link } from "gatsby"

const UserCard = ({ user }) => {
  return (
    <div className="m-4 px-6 pt-6 pb-10 text-center rounded-xl shadow-lg border-2 border-blue-500 bg-white">
      <img src={user.avatar_url} alt={user.login} className="mx-auto w-48 h-48 rounded-full" />
      <p className="mt-4 mb-10 text-2xl font-medium">{user.login}</p>
      <Link to={`/user/${user.login}`} className="px-6 py-2 text-white bg-sky-700 rounded-lg">
        VIEW PROFILE
      </Link>
    </div>
  )
}

export default UserCard
