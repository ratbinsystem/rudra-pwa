"use client";

import { useEffect, useState } from "react";
import Card from "./card";
import { IBlog, IType } from "@/interfaces";

export default function CardContainer() {
    const [data, setData] = useState<{ data: IBlog[] } | null>(null);
    useEffect(() => {
        fetch("/api/blogs?limit=10&fields=title,description,createdAt,tags,thumbnail&sort=createdAt&page=1")
            .then((response) => response.json())
            .then((data) => setData(data))
            .then((data) => console.log(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="m-1">

            <div className="row gx-1">
                {data?.data.map((x: IBlog) =>
                    'uri' in x.thumbnail ? <Card _id={x._id.toString()} tags={Array.isArray(x.tags) ? x.tags.filter((tag): tag is IType => typeof tag !== "object" || "title" in tag) : []} lastUpdated={x.createdAt ? x.createdAt.toString() : undefined} title={x.title} description={x.description} key={x._id.toString()} image={x.thumbnail.uri} /> : null
                )}
            </div>
        </div>
    );
}