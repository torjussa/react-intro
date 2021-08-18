import {Box} from "./StyleComponents"

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react"

export const NavBar = () => {
    const router = useRouter();

    return (
        <div style={{width: "100%", height: "80px", backgroundColor: "#15283b" }}></div>
    );
};