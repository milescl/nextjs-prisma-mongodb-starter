import {getProducts} from '../../../db'

import { NextResponse } from 'next/server';
 
export async function GET() {
  const results = await getProducts().catch(e => {
    console.log(e);
    return [];
    });
 return NextResponse.json({
    message: 'Products',
    data: results
});
}