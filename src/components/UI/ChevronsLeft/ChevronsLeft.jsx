import React from 'react'
import { Link } from 'react-router-dom'

export const ChevronsLeft = ({LinkExotico, classExotico }) => {
  return (
    <Link className={classExotico} to={ LinkExotico }>
        <i class='bx bxs-chevrons-left'></i>
    </Link>
    )
}
