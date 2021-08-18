import * as React from "react";
import NextLink from "next/link";

interface Link  {
    url: string,
    children: string,
    as: any

}

export const Link = ({url, children, as}: Link) => {
    return <NextLink href={url} as={as} passHref >
        <a>{children}</a>
    </NextLink>
}