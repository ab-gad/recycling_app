import React from 'react'
import PropTypes from 'prop-types'
import { Step, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import toastr from 'toastr'

import Carrt from '../../Carrt'
import Shipping from '../../Shipping'
import Billing from '../../Billing'
import Confirmation from '../../Confirmation'
import { removeFromCart, clearCart, placeOrder } from '../../../redux/actions/cart_action'
import { setShippingOptions } from '../../../redux/actions/Shipping'
import { setBillingOptions } from '../../../redux/actions/Billing'
export const TOASTR_OPTIONS = {
    closeButton: true,
    preventDuplicated: true,
    positionClass: 'toast-bottom-left'
}

class CartPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1
        }

        this.nextStep = this.nextStep.bind(this)
        this.previousStep = this.previousStep.bind(this)
        this.submit = this.submit.bind(this)
        this.handleRemoveItem = this.handleRemoveItem.bind(this)
        this.showStep = this.showStep.bind(this)
    }

    nextStep() {
        this.setState({ step: this.state.step + 1 })
    }

    previousStep() {
        this.setState({ step: this.state.step - 1 })
    }

    submit() {
        if (!this.props.auth.isAuthenticated) {
            toastr.warning("You have to login first to make an order.")
            this.props.history.push('/account')
        } else {
            this.props.placeOrder(this.props.cart, this.props.shipping.data, this.props.billing.data)
            this.props.history.push('/')
        }
    }

    handleRemoveItem(e, item) {
        e.stopPropagation()
        this.props.removeFromCart(item.id)
    }

    showStep() {
        switch (this.state.step) {
            case 1:
                return <Carrt
                            cart={this.props.cart}
                            nextStep={this.nextStep}
                            handleRemoveItem={this.handleRemoveItem}
                            clearCart={this.props.clearCart}
                        />


        }
    }

    render() {
        return (
            <div>
                <Step.Group attached='top'>
                    <Step active={this.state.step === 1}>
                        <Icon name='shopping cart' />
                        <Step.Content>
                            <Step.Title>Confirm items</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 2}>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>Shipping</Step.Title>
                            <Step.Description>Choose your shipping options</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 3}>
                        <Icon name='payment' />
                        <Step.Content>
                            <Step.Title>Billing</Step.Title>
                            <Step.Description>Enter billing information</Step.Description>
                        </Step.Content>
                    </Step>

                    <Step active={this.state.step === 4}>
                        <Icon name='info circle' />
                        <Step.Content>
                            <Step.Title>Confirm Order</Step.Title>
                            <Step.Description>Verify order details</Step.Description>
                        </Step.Content>
                    </Step>
                </Step.Group>

                {this.showStep()}
            </div>
        )
    }
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    clearCart: PropTypes.func.isRequired,
    placeOrder: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,

    }
}


export default withRouter(connect(mapStateToProps, { removeFromCart, setShippingOptions, setBillingOptions, clearCart, placeOrder })(CartPage))