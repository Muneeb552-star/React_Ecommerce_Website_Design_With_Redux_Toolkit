import './HomePage.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
// Importing Components
import Slider from '../../components/Slider/Slider'
import Category from '../../components/Category/Category'
import ProductList from '../../components/ProductList/ProductList'
import SingleCategory from '../../components/SingleCategory/SingleCategory'
//Importing Slices
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice'
import { fetchProducts } from '../../store/productSlice'

const HomePage = () => {
  const dispatch = useDispatch()
  const { data: categories, status: categoryStatus } = useSelector( state => state.category )
  const { catProductAll: productsByCategory, catProductAllStatus } = useSelector( state => state.category )
  const { data: products, status: productStatus } = useSelector( state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
    dispatch(fetchProductsByCategory(1, 'all'))
    dispatch(fetchProductsByCategory(2, 'all'))
  }, [dispatch])

  return (
    <div className='home-page'>
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productStatus} />
      {/* Showing category wise products */}
      <section> {productsByCategory[0] && ( <SingleCategory products={productsByCategory[0]} status={catProductAllStatus} /> )} </section>
    </div>
  )
}

export default HomePage
