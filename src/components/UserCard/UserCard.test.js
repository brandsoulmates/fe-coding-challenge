import React from "react"
import { render } from "@testing-library/react"

import UserCard from "."

describe('UserCard component', () => {
  it('renders the test correctly', () => {
    const mockUser = {
      login: 'gituser',
      avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4'
    }
    const result = render(<UserCard user={mockUser} />)
    expect(result).toMatchSnapshot()
  })
})
