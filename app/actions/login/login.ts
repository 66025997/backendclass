'use server'

import { redirect } from 'next/navigation';

export async function login(formData: FormData) {
    const rawFormData = {
        username: formData.get('username'),
        password: formData.get('password')
    };
    console.log(rawFormData, rawFormData.username == 'admin' && rawFormData.password == 'admin');

    if (rawFormData.username == 'admin' && rawFormData.password == 'admin') {
        console.log('test');
        redirect('/');
    } else {
        return { MessageChannel: "Username or password not correct" };
    }
}
