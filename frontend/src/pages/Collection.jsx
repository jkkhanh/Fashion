import React, { useContext, useEffect, useState } from 'react'
import { ShopConText } from '../context/ShopContext'
import { ImMenu } from "react-icons/im";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import ProductItem from '../components/ProductItem';
import { useParams } from 'react-router-dom';


const Collection = () => {

  const {category} = useParams()
  const {products} = useContext(ShopConText)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts,setFilterProducts] = useState([])
  const [selectedCategory,setSelectedCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType,setSortType] = useState("all")
  const [productView,setProductView] = useState('four')
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);


  const toggleCategory = (e) => {
    if(selectedCategory.includes(e.target.value)) {
      setSelectedCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else 
    {
      setSelectedCategory(prev => [...prev,e.target.value])
    }
  }


  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else
    {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }


  const applyFilter = () => {
    let productcopy = products.slice()
    if (category) {
      productcopy = productcopy.filter(item => item.category === category);
    }
    if (selectedCategory.length > 0) {
      productcopy = productcopy.filter(item => selectedCategory.includes(item.category))
    } 
    
    if(subCategory.length > 0) {
      productcopy = productcopy.filter(item => subCategory.includes(item.subCategory))
    }

    if (selectedPriceRanges.length > 0) {
      productcopy = productcopy.filter(item => {
        return selectedPriceRanges.some(range => {
          const [min, max] = range.split('-').map(Number);
          return max ? item.price >= min && item.price < max : item.price >= min;
        });
      });
    }
    setFilterProducts(productcopy)
  }


  const sortProduct = () => {
    let sortProductcp = filterProducts.slice()
    switch (sortType) {
      case 'low-high': 
        setFilterProducts(sortProductcp.sort((a,b) => (a.price - b.price)))
        break;

      case 'high-low': 
        setFilterProducts(sortProductcp.sort((a,b) => (b.price - a.price)))
        break;

      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    setFilterProducts(products)
  },[])

  useEffect(() => {
    applyFilter()
  },[selectedCategory,subCategory,category,products,selectedPriceRanges])

  useEffect(() => {
    sortProduct()
  },[sortType])

  const getSubCategories = () => {
    switch (category) {
      case 'thoi_trang_nam':
        return [
          { value: 'ao_thun', label: 'Áo thun' },
          { value: 'quan', label: 'Quần' },
          { value: 'so_mi', label: 'Áo sơ mi' },
          { value: 'giay_the_thao', label: 'Giày thể thao' },
          { value: 'giay_sneaker', label: 'Giày Sneaker' }
        ];
      case 'thoi_trang_nu':
        return [
          { value: 'ao_thun', label: 'Áo thun' },
          { value: 'quan', label: 'Quần' },
          { value: 'vay', label: 'Váy' },
          { value: 'so_mi', label: 'Áo sơ mi' },
          { value: 'giay_cao_got', label: 'Giày cao gót' },
          { value: 'giay_the_thao', label: 'Giày thể thao' },
          { value: 'giay_sneaker', label: 'Giày Sneaker' }
        ];
      case 'thoi_trang_cap':
        return [
          { value: 'ao_doi', label: 'Áo cặp' },
          { value: 'quan_doi', label: 'Quần cặp' }
        ];
      default:
        return [
          { value: 'ao_thun', label: 'Áo thun' },
          { value: 'quan', label: 'Quần' },
          { value: 'so_mi', label: 'Áo sơ mi' },
          { value: 'vay', label: 'Váy' },
          { value: 'ao_doi', label: 'Áo cặp' },
          { value: 'quan_doi', label: 'Quần cặp' },
          { value: 'giay_the_thao', label: 'Giày thể thao' },
          { value: 'giay_sneaker', label: 'Giày Sneaker' },
          { value: 'giay_cao_got', label: 'Giày cao gót' }
        ];
    }
  }


  const priceRanges = [
    { label: 'Từ 0 - 100.000đ', value: '0-100000' },
    { label: 'Từ 100.000 - 150.000đ', value: '100000-150000' },
    { label: 'Từ 150.000 - 200.000đ', value: '150000-200000' },
    { label: 'Từ 200.000 - 250.000đ', value: '200000-250000' },
    { label: 'Từ 250.000 - 300.000đ', value: '250000-300000' },
    { label: 'Từ 300.000 - 350.000đ', value: '300000-350000' },
    { label: 'Từ 350.000 - 500.000đ', value: '350000-500000' },
    { label: 'Từ 500.000 - 5000.000đ', value: '500000-5000000' }
  ];


  const handlePriceChange = (value) => {
    setSelectedPriceRanges(prev => {
      if (prev.includes(value)) {
        return prev.filter(item => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  

  const productsToShow = productView === 'one' ? filterProducts.slice(0, 1) : filterProducts.slice(0, 4);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t pb-28'>
      <div className='min-w-60'>
        <div className='sticky top-28'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>LỌC SẢN PHẨM</p>
          { !category && (
            <div className={`border border-gray-300 pl-5 py-3 mt-6  ${showFilter ? '' : 'hidden'} sm:block`}>
              <p className='mb-3 text-base font-medium'>DANH MỤC</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={"thoi_trang_nam"} onChange={toggleCategory}/>Thời trang nam
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={"thoi_trang_nu"} onChange={toggleCategory}/>Thời trang nữ
                </p>
                <p className='flex gap-2'>
                  <input className='w-3' type='checkbox' value={"thoi_trang_cap"} onChange={toggleCategory}/>Thời trang cặp/đôi
                </p>
              {/* <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={"Giày nam"} onChange={toggleCategory}/>Giày nam
              </p>
              <p className='flex gap-2'>
                <input className='w-3' type='checkbox' value={"Giày nữ"} onChange={toggleCategory}/>Giày nữ
              </p> */}
              </div>
            </div>
          )}
        

          <div className={`border border-gray-300 pl-5 py-3 my-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-base font-medium'>DANH MỤC NHỎ</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
              { 
                getSubCategories().map(sub => (
                  <p className='flex gap-2 font-medium' key={sub.value}>
                    <input className='w-3' type='checkbox' value={sub.value} onChange={toggleSubCategory} />{sub.label}
                  </p>
                  ))
              }
            </div>
          </div>

          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-base font-medium'>GIÁ TIỀN</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-500'>
              {
                priceRanges.map(price => (
                  <p className='flex gap-2 font-semibold mb-1' key={price.value}>
                    <input className='w-3' type='checkbox' value={price.value} onChange={() => handlePriceChange(price.value)} checked={selectedPriceRanges.includes(price.value)} />
                    {price.label}
                  </p>
                ))
              }
            </div>
          </div>
        </div>
      </div>


      <div className='flex-1 ml-2'>
        <div className='w-full bg-blue-400 h-14 rounded-md flex items-center justify-between'>
          <div className='flex items-center pl-3 gap-5 '>
            <p className={productView === 'one' ? 'text-white' : 'text-black'} onClick={() => setProductView('one')}><ImMenu className='text-xl cursor-pointer'/></p>
            <p className={productView === 'four' ? 'text-white' : 'text-black'} onClick={() => setProductView('four')}><TfiLayoutGrid4Alt className='text-xl cursor-pointer'/></p>
          </div>
          <div className='pr-3'>
            <select onChange = {(e) => setSortType(e.target.value)} className='border border-black text-base px-3 py-[7px] rounded-lg outline-none cursor-pointer font-semibold'>
              <option value='all'>Tất cả</option>
              <option value='low-high'>Thấp đến cao</option>
              <option value = 'high-low'>Cao đến thấp</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-12 mt-3'>
          {
            filterProducts.map((item,index) => (
              <ProductItem key={index} id = {item._id} image = {item.image} name = {item.name} price = {item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection