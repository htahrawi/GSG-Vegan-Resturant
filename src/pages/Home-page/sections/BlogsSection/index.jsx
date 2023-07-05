import React, { Component } from 'react'
import './style.css';
import Container from '../../../../components/container'
import BlogCard from '../../../../components/blogCard';
class BlogsSection extends Component {
    render() {
        return (
            <div className="blogs__section">
                <Container>
                    <div className="header__blogs">
                        <strong className='title__blogs'>Blogs</strong>
                        <p className="ads__blogs">words from our food lovers</p>
                    </div>
                    <div className="cards__blogs">
                        <BlogCard blogImage='/assets/blog1.png'/>
                        <BlogCard blogImage='/assets/blog2.png' reverse='true' />
                        <BlogCard blogImage='/assets/blog3.png' />
                    </div>
                </Container>
            </div>
        )
    }
}

export default BlogsSection