import PaymentForm from "@/components/payments/PaymentForm";

const PaymentPage = () => {
    return (
        <section className="container">
            <div className="bg-[#3d556d] p-6 rounded-lg max-w-xl mx-auto my-12">
                <h2 className="font-bold text-xl mb-8 text-pink-500">Payment Details</h2>
                <PaymentForm />
            </div>
        </section>
    );
};

export default PaymentPage;