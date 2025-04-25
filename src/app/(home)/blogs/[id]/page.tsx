import { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import './style.scss';
import { formatDate } from '@/utility';
interface Props {
    params: Promise<{ id: string }>
}


export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
    // read route params
    const { id } = await params

    // fetch data
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blogs/${id}`);
    const post = await data.json();

    return {
        title: post.data.title,
        description: post.data.description,
        keywords: post.data.seo,
        openGraph: {
            images: [post.data.thumbnail.uri],
            title: post.data.title,
        },
    }

}

export default async function Page({
    params,
}:
    Props
) {
    const { id } = await params

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blogs/${id}`);
    const post = await data.json();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9 col-sm-12">
                    <div className='blog-post-header'>
                        <h1 className='text-primary'>{post.data.title}</h1>
                        <p className='blog-post-description text-muted'>
                            {post.data.description}
                        </p>
                    </div>
                    <p className='blog-post-createdAt text-muted'>
                        Posted on : {formatDate(post.data.createdAt)}
                    </p>
                    <hr className="border border-primary border-2 opacity-50"/>
                    <MDXRemote source={post.data.markdown} />
                </div>
                <div className="col-md-3 col-sm-12">
                   
                </div>
            </div>
        </div>
    );
}