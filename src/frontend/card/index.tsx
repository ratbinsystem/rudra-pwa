"use client";
import Image from 'next/image';
import defaultImg from '../../../public/back.jpg';
import './style.scss';
import { formatDate } from '@/utility';
import Link from 'next/link';
import Tag from '../tag';
import { IType } from '@/interfaces';
interface Props {
    title?: string;
    description?: string;
    image?: string;
    lastUpdated?: string;
    width?: number;
    _id?: string;
    tags?: IType[];
}
export default function Card({ title, description, image, lastUpdated, width, _id, tags }: Props) {
    return (
        <div className={`card-component card  mb-1 ${width ? `col-sm-${width}` : 'col-sm-4'}`}> <div className="card text-bg-dark">
            <Image src={image ? image : defaultImg.src} height={550} width={350} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <Link href={`/blogs/${_id}`}> <h5 className="card-title">{title}</h5></Link>
                <div>
                    {tags?.map((x: IType) => <Tag key={x._id?.toString()} title={x.title} isLink={false} />)}
                </div>
                <div className='card-text-container'>
                    <p className="card-text">{description}</p>
                    <p className="card-text text-light"><small>{formatDate(lastUpdated || '')}</small></p>
                </div>
            </div>
        </div>
        </div>
    )
}