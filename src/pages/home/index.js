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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {users.map((user) => (
          <div key={user.id} className="w-72">
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
