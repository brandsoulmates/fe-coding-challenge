import React from "react"
import { render } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import axios from "axios"

import HomePage from "."

jest.mock('axios')

describe('HomePage component', () => {
  it('renders the test correctly', async () => {
    const mockData = [
      {
        id: 1,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        login: "gituserone",
      },
      {
        id: 2,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        login: "gitusertwo",
      },
      {
        id: 3,
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        login: "gituserthree",
      },
    ]
    axios.get.mockResolvedValue({
      data: mockData
    })
    const result = await act( async () => render(<HomePage />))
    expect(result).toMatchSnapshot()
  })
})