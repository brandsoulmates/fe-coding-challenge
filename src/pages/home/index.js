import * as React from "react"

import Layout from "../../components/Layout"
import UserCard from "../../components/UserCard"
import ApiService from "../../services/api"

const HomePage = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    const fetchUsers = async () => {
      const data = await ApiService.getUsers({
        since: 0,
        per_page: 9
      })
      setUsers(data)
    }

    fetchUsers()
  }, [])

  return (
    <Layout>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <div key={user.id} className="w-2/6">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
