import Link from "next/link";
import newsdb from "./db";

async function getAllNews() {
    return newsdb;
}

export default async function NewsPage() { 
    const news = await getAllNews();
    return (
        <div>
            <h1>หน้าแสดงรายการข่าว</h1>
            <ul>
                {news.map((item) => (
                    <li key={item.id}>
                        <Link href={`/news/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
