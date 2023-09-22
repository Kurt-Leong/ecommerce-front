import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Featured from '@/components/Featured'
import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import NewProducts from '@/components/NewProducts'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ product }) {
  console.log(product)
  return (
    <div>
      <Header />
      <Featured product={product} />
      <NewProducts />
    </div>
  )
}

export async function getServerSideProps() {
  const featuredProductId = '64dc37a8560c2caf9ed06138'
  await mongooseConnect()
  const product = await Product.findById(featuredProductId)
  return {
    props: { product: JSON.parse(JSON.stringify(product)) },
  }
}
