import React, { useState } from 'react'
import upload_icon from '../assets/icon/upload-icon.png'
import axios from 'axios'
import { backendUrl } from './../App';
import { toast } from 'react-toastify';


const Add = ({token}) => {

    const [image1, setImage1] = useState(false)
    const [image2, setImage2] = useState(false)
    const [image3, setImage3] = useState(false)
    const [image4, setImage4] = useState(false)
    const [image5, setImage5] = useState(false)

    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('thoi_trang_nam')
    const [subCategory, setSubCategory] = useState('ao_thun')
    const [sizes, setSizes] = useState([])
    const [bestseller, setBestseller] = useState(false)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            const formData = new FormData()
            formData.append("name",name)
            formData.append("description",description)
            formData.append("price",price)
            formData.append("category",category)
            formData.append("subCategory",subCategory)
            formData.append("bestseller",bestseller)
            formData.append("sizes", JSON.stringify(sizes))

            image1 && formData.append("image1",image1)
            image2 && formData.append("image2",image2)
            image3 && formData.append("image3",image3)
            image4 && formData.append("image4",image4)
            image5 && formData.append("image5",image5)

            const response = await axios.post(backendUrl + "/api/product/add", formData, {headers:{token}})
            
            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription('')
                setPrice('')
                setImage1(false)
                setImage2(false)
                setImage3(false)
                setImage4(false)
                setImage5(false)
            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3 '>
        <div className='w-full'>
            <p className='text-base font-semibold mb-2'>Tên sản phẩm</p>
            <input onChange={(e) => setName(e.target.value)} value={name} type='text' placeholder='Nhập tên sản phẩm...' className='w-full max-w-[515px] px-3 py-1' required/>
        </div>
        
        <div className='w-full'>
            <p className='text-base font-semibold mb-2'>Thông tin sản phẩm</p>
            <textarea  onChange={(e) => setDescription(e.target.value)} value={description} type='text' placeholder='Nhập thông tin sản phẩm...' className='w-full max-w-[515px] h-20 px-3 py-2' required/>
        </div>

        <div className='w-full'>
            <div>
                <p className='mb-1 text-base font-semibold'>Danh mục sản phẩm</p>
                <select onChange={(e) => setCategory(e.target.value)} className='cursor-pointer w-[20%] px-2 py-2 '>
                    <option value='thoi_trang_nam'>Thời trang nam</option>
                    <option value='thoi_trang_nu'>Thời trang nữ</option>
                    <option value='thoi_trang_cap'>Thời trang cặp đôi</option>
                </select>
            </div>
        </div>

        <div className='w-full'>
            <div>
                <p className='mb-1 text-base font-semibold'>Danh mục nhỏ</p>
                <select onChange={(e) => setSubCategory(e.target.value)} className='cursor-pointer w-[20%] px-2 py-2'>
                    <option value='ao_thun'>Áo thun</option>
                    <option value='quan'>Quần</option>
                    <option value='vay'>Váy</option>
                    <option value='so_mi'>Áo sơ mi</option>
                    <option value='ao_doi'>Áo cặp</option>
                    <option value='quan_doi'>Quần cặp</option>
                    <option value='giay_cao_got'>Giày cao gót</option>
                    <option value='giay_the_thao'>Giày thể thao</option>
                    <option value='giay_sneaker'>Giày Sneaker</option>
                </select>
            </div>
        </div>

        <div className='w-full'>
            <p className='mb-1 text-base font-semibold'>Giá sản phẩm:</p>
            <input onChange={(e) => setPrice(e.target.value)} value={price} type='number' placeholder='Nhập giá sản phẩm...' required className='w-[20%] px-2 py-2'/>
        </div>

        <div>
            <p className='mb-2 text-base font-semibold'>Kích cỡ sản phẩm:</p>
            <div className='flex gap-3'>
                <p className='pl-5 font-semibold'>*Dành cho quần, áo: </p>
                <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter( item => item !== "S") : [...prev, 'S'])}>
                    <p className={`${sizes.includes("S") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>S</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter( item => item !== "M") : [...prev, 'M'])}>
                    <p className={`${sizes.includes("M") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>M</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter( item => item !== "L") : [...prev, 'L'])}>
                    <p className={`${sizes.includes("L") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>L</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter( item => item !== "XL") : [...prev, 'XL'])}>
                    <p className={`${sizes.includes("XL") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>XL</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("2XL") ? prev.filter( item => item !== "2XL") : [...prev, '2XL'])}>
                    <p className={`${sizes.includes("2XL") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>2XL</p>
                </div>
            </div>

            <div className='flex gap-3 mt-2'>
                <p className='pl-5 font-semibold'>*Dành cho giày, dép: </p>
                <div onClick={() => setSizes(prev => prev.includes("33") ? prev.filter( item => item !== "33") : [...prev, '33'])}>
                    <p className={`${sizes.includes("33") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>33</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("34") ? prev.filter( item => item !== "34") : [...prev, '34'])}>
                    <p className={`${sizes.includes("34") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>34</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("35") ? prev.filter( item => item !== "35") : [...prev, '35'])}>
                    <p className={`${sizes.includes("35") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>35</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("36") ? prev.filter( item => item !== "36") : [...prev, '36'])}>
                    <p className={`${sizes.includes("36") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>36</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("37") ? prev.filter( item => item !== "37") : [...prev, '37'])}>
                    <p className={`${sizes.includes("37") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>37</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("38") ? prev.filter( item => item !== "38") : [...prev, '38'])}>
                    <p className={`${sizes.includes("38") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>38</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("39") ? prev.filter( item => item !== "39") : [...prev, '39'])}>
                    <p className={`${sizes.includes("39") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>39</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("40") ? prev.filter( item => item !== "40") : [...prev, '40'])}>
                    <p className={`${sizes.includes("40") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>40</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("41") ? prev.filter( item => item !== "41") : [...prev, '41'])}>
                    <p className={`${sizes.includes("41") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>41</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("42") ? prev.filter( item => item !== "42") : [...prev, '42'])}>
                    <p className={`${sizes.includes("42") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>42</p>
                </div>
                <div onClick={() => setSizes(prev => prev.includes("43") ? prev.filter( item => item !== "43") : [...prev, '43'])}>
                    <p className={`${sizes.includes("43") ? 'bg-blue-600 text-white' : 'bg-slate-300'} px-3 py-1 cursor-pointer`}>43</p>
                </div>
            </div>
        </div>

        <div className='mt-4'>
            <p className='mb-1.5 text-lg font-semibold'>Hình ảnh sản phẩm</p>
            <p className='text-[10px] text-red-600'>*Vui lòng tải hình ảnh sản phẩm lên</p>
            <div className='flex gap-2'>
                <label htmlFor='image1' >
                    <div className='border border-gray-400 w-24 h-24 flex items-center justify-center p-1'>
                        <img src ={!image1 ? upload_icon : URL.createObjectURL(image1)} alt='' className='w-full h-full object-contain'/>
                        <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='image1' hidden/>
                    </div>          
                </label>

                <label htmlFor='image2' >
                    <div className='border border-gray-400 w-24 h-24 flex items-center justify-center  px-1'>
                        <img src ={!image2 ? upload_icon : URL.createObjectURL(image2)} alt='' className='w-full h-full object-contain'/>
                        <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='image2' hidden/>
                    </div>          
                </label>

                <label htmlFor='image3' >
                    <div className='border border-gray-400 w-24 h-24 flex items-center justify-center  px-1'>
                        <img src ={!image3 ? upload_icon : URL.createObjectURL(image3)} alt='' className='w-full h-full object-contain'/>
                        <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='image3' hidden/>
                    </div>          
                </label>

                <label htmlFor='image4' >
                    <div className='border border-gray-400 w-24 h-24 flex items-center justify-center  px-1'>
                        <img src ={!image4 ? upload_icon : URL.createObjectURL(image4)} alt='' className='w-full h-full object-contain'/>
                        <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='image4' hidden/>
                    </div>          
                </label>

                <label htmlFor='image5' >
                    <div className='border border-gray-400 w-24 h-24 flex items-center justify-center  px-1'>
                        <img src ={!image5 ? upload_icon : URL.createObjectURL(image5)} alt='' className='w-full h-full object-contain'/>
                        <input onChange={(e) => setImage5(e.target.files[0])} type='file' id='image5' hidden/>
                    </div>          
                </label>
            </div>
        </div>

        <div className='mt-2 flex gap-2'>
            <input onChange={() => setBestseller( prev => !prev)}  checked={bestseller} type='checkbox' id='bestseller'/>
            <label className='cursor-pointer font-semibold' htmlFor='bestseller'>Sản phẩm bán chạy</label>
        </div>

       <div className='flex items-center justify-center w-[50%] mt-4 mb-14'>
        <button type='submit' className=' bg-blue-500 px-6 py-2 text-white font-semibold hover:bg-blue-600'>Thêm sản phẩm</button>
       </div>
    </form>
  )
}

export default Add