import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import paginationStyles from './Pagination.module.scss'

const Pagination = ({ pageContext }) => {
    const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } = pageContext

    return (
        <nav className={paginationStyles.pagination} role="navigation">
            <div>
                {previousPagePath && (

                    <Link to={previousPagePath} rel="prev">
                            Previous
                    </Link>

                )}
            </div>
            {numberOfPages > 1 && <div className={paginationStyles.paginationLocation}>Page {humanPageNumber} of {numberOfPages}</div>}
            <div>
                {nextPagePath && (

                    <Link to={nextPagePath} rel="next">
                            Next
                    </Link>
                )}
            </div>
        </nav>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination
