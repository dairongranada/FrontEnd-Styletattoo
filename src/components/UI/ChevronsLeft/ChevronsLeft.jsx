import React from 'react'
import { Link } from 'react-router-dom'

export const ChevronsLeft = ({LinkExotico, className }) => {
  return (
    <Link className={className} to={ LinkExotico }>
        <i className='bx bxs-chevrons-left'></i>
    </Link>
    )
}
