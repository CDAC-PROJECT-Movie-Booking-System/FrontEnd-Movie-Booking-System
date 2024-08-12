import axios from "axios";
import config from "../config";

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
}

export async function paymentStart(amount) {
    try {
        console.log("Payment started");

        // Fetch the order details from your server
        const body ={
            amount
        }
        const response = await axios.post(`${config.url}/order`, body);

        // Load the Razorpay script
        const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        
        if (!scriptLoaded) {
            throw new Error("Failed to load Razorpay script");
        }

        // Define Razorpay options
        if(response.data.status==="created"){
        var options = {
            key: "rzp_test_424E58xpMxZkTG", // Enter the Key ID generated from the Dashboard
            amount: response.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Movie Magic", // Your business name
            description: "Movie Ticket",
            image: "", // You can add a logo URL if needed
            order_id: response.data.order_id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                console.log(response.razorpay_payment_id);
                console.log(response.razorpay_order_id);
                console.log(response.razorpay_signature);
            },
            prefill: {
                name: "Your name", // Your customer's name
                email: "test@example.com",
                contact: "9000090000" // Provide the customer's phone number
            },
            notes: {
                address: "Sunbeam, Hinjewadi"
            },
            theme: {
                color: "#3399cc"
            }
        };

        // Create a Razorpay instance and open the payment gateway
        var rzp1 = new window.Razorpay(options); // Ensure Razorpay is in the global window object
        rzp1.on('payment.failed', function (response) {
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
        });

        rzp1.open();
    }
    console.log(response)
        return response;
        
    } catch (error) {
        console.log('error-response', error);
        // Handle error, e.g., show a toast notification
        // toast.error(error.response?.data?.message || "An error occurred");
    }
}
