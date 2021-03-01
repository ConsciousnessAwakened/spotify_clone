<?php

namespace App\Traits;

use League\Fractal;
use League\Fractal\Serializer\SerializerAbstract;
use League\Fractal\Resource\Item;
use League\Fractal\Resource\Collection;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

trait FractalTransformer
{

    /**
     * API shortcut for accessing array values of fractal item
     *
     * @param  $item
     * @param  $transformer
     * @return array
     */
    protected function item($item, $transformer): array
    {
        $fractal = new Fractal\Manager();

        $data = new Item($item, new $transformer);

        $item = $fractal->createData($data)->toArray();

        return $item;
    }

    /**
     * API shortcut for accessing array values of fractal collection
     * @param $collection
     * @param Callable $transformer
     * @param bool $meta
     * @param string $key
     * @return array
     */
    protected function collection($collection, $transformer, $meta = true, $key = null): array
    {
        if (($collection instanceof Collection && $collection->count() === 0)
            || (is_array($collection) && count($collection) === 0)
        ) {
            return [$key ?? 'data' => []];
        }

        $fractal = new Fractal\Manager();

        $data = new Collection($collection, new $transformer);

        if ($meta && ($collection instanceof LengthAwarePaginator)) {
            $data->setPaginator(new IlluminatePaginatorAdapter($collection));
        }

        $collection = $fractal->createData($data)->toArray();

        if (!is_null($key)) {
            $collection[$key] = $collection['data'];
            unset($collection['data']);
        }

        return $collection;
    }

}
