import pr1 from '../assets/products/somi1.jpg'
import pr1_1 from '../assets/products/somi1_1.jpg'
import pr1_2 from '../assets/products/somi1_2.jpg'
import pr2 from '../assets/products/somi2.jpg'
import pr2_1 from '../assets/products/somi2_1.jpg'
import pr3 from '../assets/products/sominu_1.jpg'
import pr3_1 from '../assets/products/sominu1_1.jpg'
import pr3_2 from '../assets/products/sominu_1_2.jpg'
import pr3_3 from '../assets/products/sominu_1_3.jpg'
import pr4 from'../assets/products/vaydam1.jpg'
import pr4_1 from'../assets/products/vaydam1_1.jpg'
import pr4_2 from'../assets/products/vaydam1_2.jpg'
import pr5 from '../assets/products/giaynam1.jpg'


export const category = [
    {
        nameCategory:"Thời trang nam",
        category: "thoi_trang_nam",
        
    },
    {
        nameCategory: "Thời trang nữ",
        category: "thoi_trang_nu",
    },
    {
        nameCategory: "Thời trang cặp đôi",
        category: "thoi_trang_cap",
    }
]


export const products = [
    {
        _id: "sp1",
        name: "Áo Sơ Mi Vải Oxford Trơn Signature Form Regular SM157 Màu Trắng Kem",
        description: "Áo sơ mi Vải Oxford Trơn Signature SM157 được thiết kế với form regular vừa vặn, mang lại cảm giác thoải mái tối đa cho người mặc, giúp che đi các khuyết điểm nhưng vẫn tôn lên các đường nét cơ thể đầy tinh tế.",
        price: 375000,
        image: [pr1,pr1_1,pr1_2,pr2,pr2_1],
        category: "thoi_trang_nam",
        subCategory: "so_mi",
        sizes: ["S", "M", "L","XL"],
        date: 111111112222,
        bestseller: true
    },
    {
        _id: "sp2",
        name: "Áo Sơ Mi Vải Oxford Trơn Signature Form Regular SM157 Màu Xanh Đen",
        description: "Áo sơ mi Vải Oxford Trơn Signature SM157 được thiết kế với form regular vừa vặn, mang lại cảm giác thoải mái tối đa cho người mặc, giúp che đi các khuyết điểm nhưng vẫn tôn lên các đường nét cơ thể đầy tinh tế.",
        price: 375000,
        image: [pr2,pr2_1],
        category: "thoi_trang_nam",
        subCategory: "so_mi",
        sizes: ["S", "M", "L","XL"],
        date: 111111112223,
        bestseller: true
    },
    {
        _id: "sp3",
        name: "Sơmi phối ren đối xứng",
        description: "Một sản phẩm đậm chất dịu dàng, kiêu sa, đánh thức tính nữ bên trong mỗi người con gái. Tay dài, cửa tay có viền nẹp nhỏ, đính nút ngọc trai che khuyết điểm và toát lên sự thời thượng rất riêng của quý cô theo đuổi phong cách công sở chuẩn Hàn.",
        price: 450000,
        image: [pr3,pr3_1,pr3_2,pr3_3],
        category: "thoi_trang_nu",
        subCategory: "so_mi",
        sizes: ["S", "M", "L","XL"],
        date: 1111111122234,
        bestseller: false
    },
    {
        _id: "sp4",
        name: "Đầm Dáng A Tay Xếp Ly",
        description: "Chiếc đầm trong tone màu nâu trà sữa tinh giản để làn da nào cũng diện hợp diện sáng da, ANIE tạo form đầm A rã eo nàng mặc lên vừa gọn vừa cao dáng hơn",
        price: 380000,
        image: [pr4,pr4_1,pr4_2],
        category: "thoi_trang_nu",
        subCategory: "vay",
        sizes: ["S", "M", "L","XL"],
        date: 111111112123,
        bestseller: true
    },
    {
        _id: "sp5",
        name: "Giày Thể Thao Nam MWC 5727- Giày Thể Thao Nam Dáng Sneaker Cổ Thấp, Giày Thể Thao Nam Đi Học, Đi Chơi, Dã Ngoại Năng Động, Trẻ Trung, Thời Trang.",
        description: "Đế giày được làm bằng chất liệu cao su dẻo rất êm mềm, dễ đi, dễ phối hợp với nhiều trang phục khác nhau từ âu, jeans hay sooc,... đều rất hợp thời trang",
        price: 380000,
        image: [pr5],
        category: "thoi_trang_nam",
        subCategory: "giay_sneaker",
        sizes: [40,42],
        date: 111111112123,
        bestseller: true
    },
    {
        _id: "sp6",
        name: "Giày Thể Thao Nam MWC 5727- Giày Thể Thao Nam Dáng Sneaker Cổ Thấp, Giày Thể Thao Nam Đi Học, Đi Chơi, Dã Ngoại Năng Động, Trẻ Trung, Thời Trang.",
        description: "Đế giày được làm bằng chất liệu cao su dẻo rất êm mềm, dễ đi, dễ phối hợp với nhiều trang phục khác nhau từ âu, jeans hay sooc,... đều rất hợp thời trang",
        price: 380000,
        image: [pr5],
        category: "thoi_trang_nam",
        subCategory: "giay_sneaker",
        sizes: [35,36,37,38,40,42],
        date: 111111112123,
        bestseller: true
    },
]