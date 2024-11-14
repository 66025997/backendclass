import { mysqlPool } from "@/app/utils/db"
import Link from 'next/link';

export default async function TodoPage() {
    const promisePool = mysqlPool.promise();
    const todos = await promisePool.execute("SELECT * FROM todos");
    const [rows, fields] = todos;

    return (
        <div className="p-3">
            <h1>Todo list page</h1>
            <div>
            <Link href="/dashboard/todo/create" className="underline bg-blue-500">Create</Link>
            </div>
                

            <ul>
                {rows.map(row => (<li key={row.id}>
                        <Link className="underline text-blue-500" href={`/dashboard/todo/${row.id}`}>{row.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
