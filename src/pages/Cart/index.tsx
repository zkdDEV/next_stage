import Header from '../../components/Header'
import CartContent from '../../components/CartContent'
import CartPayment from '../../components/CartPayment'

const Cart = () => {
  return (
    <>
      <Header inStore="no" />
      <CartContent />
      <CartPayment />
    </>
  )
}
export default Cart
