import Link from 'next/link';
import blogPosts from './db';

const BlogListPage = () => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogListPage;
