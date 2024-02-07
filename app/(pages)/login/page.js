import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <div>
      <p> login page</p>
      <Link href="/">
      <button> Go back </button>
      </Link>
    </div>
  )
}
