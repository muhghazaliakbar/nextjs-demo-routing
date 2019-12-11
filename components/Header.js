import CategoryLink from "./CategoryLink";
import React from "react";
import Link from "next/link";


const Header = () => (
    <ul style={{
        display: 'flex',
        listStyleType: 'none',
        padding: 0
    }}>
        <Link href="/">
            <a style={{ marginRight: 15 }}>Index</a>
        </Link>
        <Link href="/about" as="/about-me">
            <a style={{ marginRight: 15 }}>About</a>
        </Link>
        <Link href="/[category]/[blog]" as="/category-1/heLL0-from-makassar">
            <a style={{ marginRight: 14, color: 'red' }}>Hello makassar</a>
        </Link>
        <CategoryLink category="category-1" title="Category 1"/>
        <CategoryLink category="category-2" title="Category 2"/>
        <CategoryLink category="category-3" title="Category 3"/>
        <CategoryLink category="category-4" title="Category 4"/>
    </ul>
);

export default Header
