import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Form({ auth, order }) {
    const {data, setData, post, put, processing, errors} = useForm({
        status: order ? order.status : "",
        total_price: order ? order.total_price : "",
    });
    
    function handleSubmit(e) {
        e.preventDefault();
        
        if (order === undefined)
            post(route("dashboard.orders.store"));
        else
            put(route("dashboard.orders.update", order.id));
    }

    return (
        <AuthenticatedLayout user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Novo Pedido</h2>
                </div>
            }
        >
            <Head title="Pedidos" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 w-1/2 mx-auto overflow-hidden shadow-sm sm:rounded-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-y-5 py-10 items-center">
                            <label className="flex flex-col">
                                <span className="text-gray-200">Preço Total</span>
                                <input type="text" placeholder="" value={data.total_price}
                                    disabled={true}
                                    className="form-input rounded-md shadow-sm opacity-80" />
                                
                                {errors.total_price !== undefined && <span className="text-red-500">{errors.total_price}</span>}
                            </label>
                            <label className="flex flex-col">
                                <span className="text-gray-200">Status</span>
                                <input type="text" placeholder="" value={data.status}
                                    onChange={e => setData("status", e.target.value)}
                                    className="form-input rounded-md shadow-sm" />
                                
                                {errors.status !== undefined && <span className="text-red-500">{errors.status}</span>}
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