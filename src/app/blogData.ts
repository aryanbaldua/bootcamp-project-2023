import { StaticImageData } from "next/image";
import apple from "@/app/images/apple.jpg"
import orange from "@/app/images/orange.jpg"

export interface Blog {
    title : string;
    date: string;
    description: string;
	image: StaticImageData;
    slug: string;
};

const blogs: Blog[] = [
	{
		title: "Apples are cool",
		date: "10-2-2023",
		description: "I love apples man",
		image: orange,
        slug: "blog2.html",
	},
	{
		title: "Oranges are really cool",
		date: "10-1-2023",
		description: "As orange as orange gets",
		image: apple,
        slug: "blog1.html",
	},
];

export default blogs;