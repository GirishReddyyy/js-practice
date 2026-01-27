// 🧪 Given Data:
const order = {
    orderId: "ORD1001",
    customer: {
        name: "Anita",
        address: {
            city: "Hyderabad",
            pincode: 500085
        }
    },
    items: [
        { product: "Laptop", price: 70000 }
    ]
};

// 🎯 Task:
// 1. Create a deep copy of order

const deepCopyOrder = structuredClone(order)
console.log("Deep Copied Order:")
console.log(deepCopyOrder)

// 2. Modify in copied object:
// i.customer.address.city
deepCopyOrder.customer.address.city="Bangalore"

// ii.items[0].price
deepCopyOrder.items[0].price=65000
// iii.Verify original object remains unchanged
console.log("Original Order after modifications in copied order:")
console.log(order)
console.log("Deep Copied Order after modifications:")
console.log(deepCopyOrder)
