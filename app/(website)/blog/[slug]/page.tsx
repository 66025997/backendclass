import blogPosts from '../db';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

const BlogPostPage = async ({ params }: BlogPostProps) => {
    const { slug } = await params;

    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return <div><h1>Post not found</h1></div>;
    }

    const formattedSlug = slug.replace(/-/g, ' ');

    return (
        <div className="container">
            <h1>{post.title}</h1>
            <p><strong>Slug:</strong> {formattedSlug}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default BlogPostPage;
