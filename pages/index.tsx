import styles from 'styles/home.module.css'
import ProductList from 'components/ProductList/ProductList'

function Home() {
  return (
    <main className={styles.main}>
      <h1>Vista de Productos</h1>
      <p>
        Lista de Productos
      </p>
      <ProductList />
      <hr className={styles.hr} />
    </main>
  )
}

export default Home
