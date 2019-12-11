import Link from "next/link";

const linkStyle = {
    marginRight: 15
};

const CategoryLink = props => (
    <li>
        <Link href="/[category]" as={`/${props.category}`}>
            <a style={linkStyle}>{props.title}</a>
        </Link>
    </li>
);

export default CategoryLink
