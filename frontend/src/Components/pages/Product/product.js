
import React from 'react'
import './Product.scss'
import PropTypes from 'prop-types'
import { Modal, Card, Image, Rating, Grid, Header, Divider, Button, Input } from 'semantic-ui-react'
import toastr from 'toastr'
export const TOASTR_OPTIONS = {
  closeButton: true,
  preventDuplicated: true,
  positionClass: 'toast-bottom-left'
}


toastr.options = TOASTR_OPTIONS

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            modalOpen: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleMinusCount = this.handleMinusCount.bind(this)
        this.handleAddCount = this.handleAddCount.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleOnChange(e) {
        this.setState({ quantity: parseInt(e.target.value, 10) })
    }

    handleMinusCount() {
        if (this.state.quantity > 1) {
            this.setState({ quantity: this.state.quantity - 1 })
        }
    }

    handleAddCount() {
        if (this.state.quantity < this.props.product.quantity) {
            this.setState({ quantity: this.state.quantity + 1 })
        }
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        this.setState({ quantity: 1, modalOpen: false })
    }

    handleAddToCart() {
        this.props.addToCart(this.props.product, this.state.quantity)
        this.handleModalOnClose()
        toastr.success(`Added <b>${this.props.product.name}</b> into shopping-cart.`)
    }

    render() {
        const modalTrigger =
            <Card link onClick={this.handleModalOpen}>
                <Image src={this.props.product.image_url} alt='img' centered rounded />
                <Card.Content>
                    <Card.Header>
                        {this.props.product.name}
                    </Card.Header>

                    <Card.Meta>
                        ${this.props.product.price}
                    </Card.Meta>
                </Card.Content>

                <Card.Content extra>
                    <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                </Card.Content>
            </Card>

        return (
            <Modal trigger={modalTrigger} size='large' open={this.state.modalOpen} onClose={this.handleModalOnClose} closeIcon>
                <Modal.Header>Product Details</Modal.Header>

                <Modal.Content image>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Image src={this.props.product.image_url} alt='img' wrapped />
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Modal.Description>
                                    <Header id='product-name' as='h1'>{this.props.product.name}</Header>
                                    <Header id='price' as='h2'>${this.props.product.price}</Header>
                                    <Header id='rating' sub>
                                        <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                                    </Header>

                                    <div id='quantity'>
                                        <Button icon='minus' size='tiny' onClick={this.handleMinusCount} />
                                        <Input value={this.state.quantity} onChange={this.handleOnChange} />
                                        <Button icon='add' size='tiny' onClick={this.handleAddCount} />
                                        <span>(In stock: {this.props.product.quantity})</span>
                                    </div>

                                    <Divider />

                                    <p>{this.props.product.description}</p>
                                </Modal.Description>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>

                <Modal.Actions>
                    <Button
                        primary={true}
                        content='Add to cart'
                        icon='add to cart'
                        labelPosition='right'
                        onClick={this.handleAddToCart}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
}


export default Product

// import React,{useEffect} from 'react';
// import {API_URL} from '../../../config/index';
// import QueryString from 'query-string';
// import{useLocation}from'react-router-dom';
// const Homeproduct =()=>{

//     const location=useLocation();
//     useEffect(() => {
//         // Check to see if this is a redirect back from Checkout
//         const values = QueryString.parse(location.search);
//         console.log(values);

//         if (values.success) {
//           console.log("Order placed! You will receive an email confirmation.");
//         }

//         if (values.canceled) {
//             console.log(
//             "Order canceled -- continue to shop around and checkout when you're ready."
//           );
//         }
//       }, []);

//       return(
//         <section>
//         <div className="product">
//           <img
//             src="https://i.imgur.com/EHyR2nP.png"
//             alt="The cover of Stubborn Attachments"
//           />
//           <div className="description">
//           <h3>Stubborn Attachments</h3>
//           <h5>$20.00</h5>
//           </div>
//         </div>
//         <form action={`${API_URL}/api/stripe/create-checkout-session`} method="POST">
//           <button type="submit">
//             Checkout
//           </button>
//         </form>
//       </section>
//       )

// };
// export default Homeproduct;
