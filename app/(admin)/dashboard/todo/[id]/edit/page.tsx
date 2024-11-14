import { mysqlPool } from "@/app/utils/db";
import { redirect } from "next/navigation";
import Form from "next/form";

export default async function TodoEditPage({ params }: { params: { id: number } }) {
    const todoId = params.id;
    const promisePool = mysqlPool.promise();
    const [rows, fields] = await promisePool.execute(`SELECT * FROM todos WHERE id = ${todoId}`);

    if (rows.length > 0) {
        const data = rows[0];

        const updateForm = async (formData: FormData) => {
            'use server'
            const title = formData.get('title') as string;
            const description = formData.get('description') as string;
            const isDelete = formData.get('isDelete') as string;

            if (rows && rows.length > 0) {
                if (isDelete === 'deleted') {
                    const sql = `DELETE FROM todos WHERE id=${todoId}`;
                    const updatePool = mysqlPool.promise();
                    const result = await updatePool.execute(sql);
                    console.log('data', result);
                    redirect('/dashboard/todo/');
                } else {
                    const sql = `UPDATE todos SET 
                            title='${title}', 
                            description='${description}' 
                            WHERE id=${todoId}`;
                    const updatePool = mysqlPool.promise();
                    const result = await updatePool.execute(sql);
                    console.log('data', result);
                    redirect('/dashboard/todo/' + todoId);
                }
            } else {
                redirect('/dashboard/todo');
            }
        }        
        
        return (
            <div className="p-3">
                <Form action={updateForm}>
                    <div>
                        Title : <input type="text" className="border-2" name="title" defaultValue={data.title} placeholder="Enter title" />
                    </div>
                    <div>
                        Description : <textarea className="border-2" name="description" defaultValue={data.description} placeholder="Enter description" />
                    </div>
                    <div>
                        <button type="submit" className="p-3 bg-blue-300">Save</button>
                        <button type="submit" name="isDelete" value="deleted" className="p-3 bg-red-300">Delete</button>
                    </div>
                </Form>
            </div>
        );
    } else {
        redirect("/dashboard/todo");
    }
}
