import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import crypto from 'crypto';
import https from 'https';


//placing orders using cod method
const placeOrder = async (req,res) => {
    try {
        const { userId, items, amount, address} = req.body
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "Thanh toán khi nhận hàng",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({
            success: true,
            message: "Đơn hàng đã đặt"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}


//placing orders using stripe method
const placeOrderStripe = async (req,res) => {}


//placing orders using momo method
const placeOrderMomo = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        // Cộng thêm phí giao hàng vào tổng số tiền
        const shippingFee = 15000;
        const totalAmount = amount + shippingFee;

        const orderData = {
            userId,
            items,
            address,
            amount: totalAmount,
            paymentMethod: "Thanh toán qua MoMo",
            payment: false,
            date: Date.now()
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Thông tin thanh toán MoMo
        const partnerCode = process.env.MOMO_PARTNER_CODE;
        const accessKey = process.env.MOMO_ACCESS_KEY;
        const secretKey = process.env.MOMO_SECRET_KEY;
        const requestId = partnerCode + new Date().getTime();
        const orderId = requestId; // Hoặc một ID duy nhất khác nếu cần
        const orderInfo = "Thanh toán đơn hàng qua MoMo";
        const redirectUrl = process.env.MOMO_REDIRECT_URL; // URL để chuyển hướng sau khi thanh toán
        const ipnUrl = process.env.MOMO_IPN_URL; // URL để thông báo trạng thái
        const requestType = "captureWallet";
        const extraData = ""; // Để trống nếu không có thông tin bổ sung

        // Tạo chữ ký
        const rawSignature = `accessKey=${accessKey}&amount=${totalAmount}&extraData=${extraData}&ipnUrl=${ipnUrl}&orderId=${orderId}&orderInfo=${orderInfo}&partnerCode=${partnerCode}&redirectUrl=${redirectUrl}&requestId=${requestId}&requestType=${requestType}`;
        const signature = crypto.createHmac('sha256', secretKey).update(rawSignature).digest('hex');

        // Tạo JSON object gửi đến MoMo
        const requestBody = JSON.stringify({
            partnerCode,
            accessKey,
            requestId,
            amount: totalAmount,
            orderId,
            orderInfo,
            redirectUrl,
            ipnUrl,
            extraData,
            requestType,
            signature,
            lang: 'en',
        });

        // Gửi yêu cầu đến MoMo
        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/v2/gateway/api/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody),
            },
        };

        const reqMomo = https.request(options, (resMomo) => {
            resMomo.setEncoding('utf8');
            resMomo.on('data', (body) => {
                const response = JSON.parse(body);
                if (response && response.payUrl) {
                    res.json({
                        success: true,
                        message: "Đơn hàng đã được tạo. Vui lòng hoàn tất thanh toán.",
                        payUrl: response.payUrl // Trả về URL thanh toán
                    });
                } else {
                    res.json({
                        success: false,
                        message: "Lỗi trong quá trình tạo đơn hàng. Vui lòng thử lại."
                    });
                }
            });
        });

        reqMomo.on('error', (e) => {
            console.log(`Problem with request: ${e.message}`);
            res.json({
                success: false,
                message: "Có lỗi xảy ra khi kết nối tới MoMo."
            });
        });

        // Ghi dữ liệu vào body của yêu cầu
        reqMomo.write(requestBody);
        reqMomo.end();

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        });
    }
};





//all orders data for admin panel
const allOrders = async (req,res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}


 
//update order status for admin
const updateStatus = async (req,res) => {
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({
            success: true,
            message: "Đã cập nhật trạng thái đơn hàng"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



//user order data for frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



export {placeOrder, placeOrderStripe, placeOrderMomo, allOrders, userOrders, updateStatus}