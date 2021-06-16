import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

import {
    postCard,
    postCardTitle,
    postCardTags,
    postCardExcerpt,
    postCardFooter,
    postCardFooterRight,
} from './PostCard.module.scss'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <Link to={url} className={postCard}>
            <header>
                <h2 className={postCardTitle}>{post.title}</h2>
                {post.featured && <span>Featured</span>}
                {post.tags && <div className={postCardTags}> <Tags post={post} visibility="public" autolink={false} /></div>}
            </header>
            <section className={postCardExcerpt}>{post.excerpt}</section>
            <footer className={postCardFooter}>
                <div className={postCardFooterRight}>
                    <div>{readingTime}</div>
                </div>
            </footer>
        </Link>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
