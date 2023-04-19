import React from "react"

const Layout = ({ children }) => {
  return (
    <>
      <main className="bg-sky-600">
        <div className="mx-auto pt-5 max-w-5xl min-h-screen">
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
