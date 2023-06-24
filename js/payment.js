const merch = document.querySelector(".merch");

const loadScript = (src)=> {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
};

async function displayRazorpay() {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

    if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
    }

    const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
        t.json()
    )

    console.log(data)

    const options = {
        key: 'rzp_test_iqsAqkQaF72QkD',
        currency: data.currency,
        amount: data.amount.toString(),
        order_id: data.id,
        name: 'AI CLUB',
        description: 'Event Ticket Purchase',
        image: 'http://localhost:1337/logo.svg',
        handler: function (response) {
            alert(response.razorpay_payment_id)
            alert(response.razorpay_order_id)
            alert(response.razorpay_signature)
        },
        // prefill: {
        // 	name,
        // 	email: 'sdfdsjfh2@ndsfdf.com',
        // 	phone_number: '9899999999'
        // }
    }
    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
}

merch.addEventListener("click",displayRazorpay);