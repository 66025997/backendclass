'use client'

import Form from "next/form";
import { useActionState } from "react";
import createTodo from "../../../../actions/todos";

export default function TodoCreateForm() {
    const initialState = {
        message: ''
    };

    const [state, formAction] = useActionState(createTodo, initialState);

    return (
        <div className="p-3">
            <h1>Create Form</h1>
            {state.message ? (
                <p>{state.message}</p>
            ) : (
                ""
            )}
    
            <Form action={formAction}>
                <div>
                    Title: <input type="text" className="border-2" name="title" />
                </div>
                <div>
                    Description: <textarea className="border-2" name="description" />
                </div>
                <div>
                    <button type="submit" className="p-3 bg-blue-300">Save</button>
                </div>
            </Form>
        </div>
    );
    
}
