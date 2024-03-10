import React from 'react';
import { PostCard } from '../../../components/PostCard';
import {loadBlogPosts, loadPost, PostData} from '../../../loader';
import {globals} from "../../../globals";
import {Markdown} from "../../../components/Markdown";

// Category react component based on props from getStaticProps
function Category(props: any) {
    const {posts} = props;
    return(
        <div className="content">
            <div className="introduction">
                <h1>{props.category}</h1>
                <Markdown source={props.introduction.content} />
            </div>
            <div className="section">
                <h2>Stories</h2>
                <div className="post-card-container">
                    {posts.map((post: PostData, j: string | number | null | undefined) => {
                        return <PostCard post={post} key={j} />;
                    })}
                </div>
            </div>
        </div>
    )
}

// all category paths
export const getStaticPaths = () => {
    const paths = globals.categories.map((category) => `/blog/category/${category.id}`);
    return { paths, fallback: false };
};
// props for each category
export const getStaticProps = async ({ params }: any) => {
    const allPosts = await loadBlogPosts()
    const category = globals.categories.filter(cat => cat.id == params.category)[0].name
    const posts = allPosts.filter((post: PostData) => post.tags?.includes(category));
    const categoryMdFileName = category.toLowerCase().replace(/ /g, "-");
    const categoryIntro = await loadPost(`blog/category/${categoryMdFileName}.md`);
    return { props: { posts, category: category, introduction: categoryIntro } };
};

export default Category;