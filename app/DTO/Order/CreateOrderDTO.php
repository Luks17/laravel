<?php

namespace App\DTO\Order;

use App\Http\Requests\StoreUpdateOrderRequest;

class CreateOrderDTO
{
    public function __construct(
        public string $status,
        public int $price_total,
    )
    {
        
    }
    
    public static function fromRequest(StoreUpdateOrderRequest $request): self 
    {
        return new self(
            $request->status,
            $request->price_total
        );
    }
}