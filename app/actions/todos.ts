'use server'

import { redirect } from "next/navigation";
import { mysqlPool } from "../utils/db";

export default async function createTodo(prevState: any, formData: FormData) {
    console.log(formData);
    // create todo will be here.

    // Validate formData first
    if (formData.get('title')) {
        const sql = `
        INSERT INTO todos
        (title, description)
        VALUES ('${formData.get('title')}', '${formData.get('description')}')
        `;

        const insertPool = mysqlPool.promise();
        await insertPool.execute(sql);
        redirect('/dashboard/todo');
    } else {
        return {
            message: 'title is required'
        };
    }
}
