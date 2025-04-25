import { MDXRemote } from 'next-mdx-remote/rsc'

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    const data = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/blogs/${id}`);
    const post = await data.json();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9 col-sm-12">
                    <MDXRemote source={post.data.markdown} />
                </div>
                <div className="col-md-3 col-sm-12">
                    <h2>Related Posts</h2>
                    <ul>
                        <li><a href="#">Post 1</a></li>
                        <li><a href="#">Post 2</a></li>
                        <li><a href="#">Post 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}