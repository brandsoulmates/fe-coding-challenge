import React from "react"
import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import axios from "axios"

import { ProfileView } from "."

jest.mock('axios')

describe('UserPage component', () => {
  it('renders the test correctly', async () => {
    const mockData = {
      avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
      id: 1,
      login: "gituser",
      followers: 12,
      following: 32,
      public_gists: 273,
      public_repos: 46,
      twitter_username: "gituser",
      location: "united state",
      bio: "biography...",
      company: "google"
    }

    axios.get.mockResolvedValue({data: mockData})
    const result = await act( async () => render(<ProfileView username="gituser" />))
    expect(result).toMatchSnapshot()
  })
})
