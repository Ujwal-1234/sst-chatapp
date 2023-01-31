import React from 'react'
import { Auth } from "aws-amplify";

export default function Home({user}) {
  return (
    <div className="profile">
        <p>Welcome {user.attributes.given_name}!</p>
        <p>{user.attributes.email}</p>
        {user?(
            <>
            <p>
                user1
            </p>
            <p>
                user2
            </p>
            </>
        ):(`Not Logged in`)}
    </div>
  )
}
