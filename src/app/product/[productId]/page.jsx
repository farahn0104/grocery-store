import ProductDetailsComponent from "@/components/ProductDetails";
import ProductRow from "@/components/ProductRow";

export default function ProductDetails() {
    return (
        <section className="py-10 bg-white">
            <div className='container pb-5'>
                <ProductDetailsComponent />
            </div>
            <ProductRow title='Related Products' />


        </section>

    )
}
