import React from 'react'
import about from '../assets/abouttttt.jpg'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div >
      <p className='text-3xl text-center pt-8 border-t font-semibold'>GIỚI THIỆU VỀ CHÚNG TÔI</p>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-28'>
        <img src ={about} alt='' className='w-full md:max-w-[550px] h-[600px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-black'>
          <h2 className='text-xl text-center font-semibold'>FASHION SHOP</h2>
          <p>Chào mừng bạn đến với <Link to ='/'><b className='hover:text-blue-600'>Fashion Shop </b></Link> – điểm đến hàng đầu dành cho những ai yêu thích phong cách và thời trang. Tại đây, chúng tôi cung cấp những bộ sưu tập quần áo hiện đại, trẻ trung, và phù hợp với mọi xu hướng. Với cam kết mang đến sản phẩm chất lượng, Fashion Shop luôn nỗ lực để bạn có trải nghiệm mua sắm tuyệt vời, từ sự đa dạng về mẫu mã cho đến giá cả hợp lý.</p>
          <p>Chúng tôi hiểu rằng mỗi khách hàng đều có phong cách và cá tính riêng, vì vậy các thiết kế của Fashion Shop luôn đa dạng, giúp bạn dễ dàng tìm thấy trang phục phù hợp với mình. Đội ngũ nhân viên chuyên nghiệp của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ để mang đến sự hài lòng tối đa cho bạn. Hãy đến với chúng tôi và khám phá phong cách thời trang riêng của bạn!</p>
          <p>Ngoài ra, <Link to ='/'><b className='hover:text-blue-600'> Fashion Shop </b></Link> không ngừng cập nhật những xu hướng mới nhất trên thế giới, để bạn luôn tự tin diện những trang phục dẫn đầu phong cách. Chúng tôi tin rằng thời trang không chỉ là trang phục, mà còn là cách bạn thể hiện bản thân và khẳng định cá tính. Hãy đến với chúng tôi và khám phá phong cách thời trang riêng của bạn!</p>
          <p><b>Địa chỉ</b>: 19/8 Trần Văn Ơn, phường Nguyễn Văn Cừ, thành phố Quy Nhơn, tỉnh Bình Định</p>
          <p><b>Hotline:</b> 1900 8098</p>
          <p><Link to ='/'><b className='hover:text-blue-600'> Fashion Shop </b></Link> – Nơi phong cách của bạn tỏa sáng.</p>
        </div>
      </div>
      <p className='text-2xl font-semibold'>CHỌN CHÚNG TÔI?</p>
      <div className='flex flex-col md:flex-row text-sm mb-20 mt-10'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về chất lượng:</b>
          <p className='font-medium pl-1'>Chúng tôi luôn chú trọng đến chất lượng sản phẩm. Từng sản phẩm đều được chọn lọc kỹ lưỡng từ các nhà cung cấp uy tín, đảm bảo mang lại cho khách hàng trải nghiệm mua sắm tuyệt vời. Chúng tôi không chỉ cung cấp quần áo thời trang mà còn mang đến sự tự tin và phong cách riêng biệt cho mỗi người.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về giá cả và ưu đãi:</b>
          <p className='font-medium pl-1'>Chúng tôi luôn cố gắng mang đến sản phẩm chất lượng với mức giá cạnh tranh. Chúng tôi hợp tác trực tiếp với các nhà sản xuất và nhà cung cấp, giúp giảm thiểu chi phí trung gian và từ đó có thể cung cấp giá cả hợp lý hơn cho khách hàng mà không ảnh hưởng đến chất lượng sản phẩm.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b className='text-lg'>Về chăm sóc khách hàng:</b>
          <p className='font-medium pl-1'>Dịch vụ chăm sóc khách hàng là ưu tiên hàng đầu của chúng tôi. Đội ngũ nhân viên của chúng tôi được đào tạo chuyên nghiệp và luôn sẵn sàng hỗ trợ bạn với bất kỳ thắc mắc nào mọi lúc mọi nơi. Bạn chỉ cần liên hệ chúng tôi sẽ giải đáp ngay cho bạn! Cảm ơn đã xem và ủng hộ</p>
        </div>
      </div>
    </div>
  )
}

export default About