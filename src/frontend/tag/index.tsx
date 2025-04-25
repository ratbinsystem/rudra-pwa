"use client";

import Link from "next/link";
import './style.scss';
interface Props {
    title: string;
    _id?: string;
    isLink: boolean;
    classes?: string;
}
export default function Tag({ title, _id, isLink, classes = 'text-bg-primary' }: Props) {
    return isLink ? <Link href={"#"} className={`tag-component badge rounded-pill me-1  ${classes}`}>{title}</Link> : <span id={_id} className={`tag-component badge rounded-pill me-1 ${classes}`}>{title}</span>;
}