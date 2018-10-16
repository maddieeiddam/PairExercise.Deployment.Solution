import React from 'react'

//HELLO IT'S ME!!!!!

export default (props) => (
  <tr>
    <td className="user--first-name">{props.firstName}</td>
    <td className="user--last-name">{props.lastName}</td>
    <td className="user--email">{props.email}</td>
  </tr>
)
