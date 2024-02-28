import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm } from "@inertiajs/react";

export default function Clients({ auth }) {
    const {data, setData, post, processing, errors} = useForm({
        name: "",
        phone_number: "",
        email: "",
    });
    
    function handleSubmit(e) {
        e.preventDefault();
        post(route("dashboard.clients.store"));
    }

    return (
        <AuthenticatedLayout user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Novo Cliente</h2>
                </div>
            }
        >
            <Head title="Clients" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 w-1/2 mx-auto overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 py-10 items-center">
                            <label className="flex flex-col">
                                <span className="text-gray-200">Nome do Cliente</span>
                                <input type="text" placeholder="" value={data.name}
                                    onChange={e => setData("name", e.target.value)}
                                    className="form-input rounded-md shadow-sm" />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-gray-200">Número de telefone</span>
                                <input type="text" placeholder="" value={data.phone_number}
                                    onChange={e => setData("phone_number", e.target.value)}
                                    className="form-input rounded-md shadow-sm" />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-gray-200">Endereço de E-mail</span>
                                <input type="email" placeholder="fulano.exemplo@mail.com" value={data.email}
                                    onChange={e => setData("email", e.target.value)}
                                    className="form-input rounded-md shadow-sm" />
                            </label>
                            
                            <button type="submit" disabled={processing}
                                className="text-gray-100 mt-5 bg-red-900 px-5 py-2.5 font-bold rounded-lg">
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}