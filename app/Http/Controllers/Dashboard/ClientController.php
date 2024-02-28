<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUpdateClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $clients = Client::all();

        return Inertia::render("Dashboard/Clients/Index", [
            "clients" => $clients
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Dashboard/Clients/Form");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUpdateClientRequest $request)
    {
        $data = $request->all();
        $data["status"] = "a";
 
        Client::create($data);
        
        return redirect()->route("dashboard.clients");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        if(!$client = Client::find($id)) {
            return back();
        }
        
        return Inertia::render("Dashboard/Clients/Show", [
            "client" => $client
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        if(!$client = Client::find($id)) {
            return back();
        }
        
        return Inertia::render("Dashboard/Clients/Form", [
            "client" => $client
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreUpdateClientRequest $request, string $id)
    {
        if(!$client = Client::find($id)) {
            return back();
        }
        
        $client->update($request->only([
            "name", "phone_number"
        ]));
        
        return redirect()->route("dashboard.clients");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if(!$client = Client::find($id)) {
            return back();
        }
        
        $client->delete();

        return redirect()->route("dashboard.clients");
    }
}
