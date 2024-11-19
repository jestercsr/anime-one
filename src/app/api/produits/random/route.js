import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import ProductModel from "../../../../../models/productModel";

export async function GET(params) {
    await connectDB()
    const produitRandom = await ProductModel.aggregate([{ $sample: { size: 9 } }]);
    return NextResponse.json({produitRandom}, {status: 201})
}