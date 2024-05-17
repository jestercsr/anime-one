'use client'

import Image from "next/image";
import Link from "next/link";

export function MangaList({params}){
    return(
        <div>
            {params.map((param) => {
                <div>
                    <Link href={`/${param.slug}`}><Image src={param.image}></Image></Link>
                </div>
            })}
        </div>
    )
}