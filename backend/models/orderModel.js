import mongoose from "mongoose";


const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true},
    items: { type: Array, required: true},
    amount: { type: Number, required: true},
    address: { type: Object, required: true},
    status: { type: String, require: true, default: 'Đã đặt đơn hàng'},
    paymentMethod: { type: String, require: true},
    payment: { type: Boolean, require: true, default: false},
    date: { type: Number, require: true},
})


const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
export default orderModel