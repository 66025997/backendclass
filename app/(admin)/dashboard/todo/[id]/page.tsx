import { mysqlPool } from "@/app/utils/db"
import Link from "next/link";

export default async function TodoViewPage({ params }: { params: { id: number } }) {
    const todoId = await params.id;
    const promisePool = mysqlPool.promise();
    const [rows, fields] = await promisePool.execute(`SELECT * FROM todos WHERE id = ${todoId}`);
    
    if (rows.length > 0) {
        const data = rows[0];
        return (
            <div className="p-3">
                <h1>Todo View : {todoId}</h1>
                <div>Title : {data.title}</div>
                <div>Description : {data.description}</div>
                <div>Created At : {new Date(data.created_at).toISOString()}</div>
                <div>Updated At : {new Date(data.updated_at).toISOString()}</div>
                <div className="mt-3">
                    <Link href={`/dashboard/todo/${todoId}/edit`} className="p-3 bg-blue-300">Edit Todo</Link>
                </div>
            </div>
        );
    } else {
        return (
            <div className="p-3">
                <h1>No Data Found</h1>
            </div>
        );
    }
}