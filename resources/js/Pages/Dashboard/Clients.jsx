import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Clients({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Clients" />
            <div>a</div>
        </AuthenticatedLayout>
    )
}