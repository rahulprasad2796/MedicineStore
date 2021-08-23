import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editOrder, salesOrder } from '../../Redux/Actions/action';


export class Order extends Component {
    orderState = {
        id: "",
        cname:"",
        contact:"",
        product:"",
        quantity:"",
        amount: "",
        tamount: ""
    }
    addOrderName(e) {
        if(e.target.value !== "") {
            this.orderState.cname = e.target.value;
            this.orderState.id = e.target.value[0] + 1;
        }
    }
    addOrderCont(e) {
        if(e.target.value !== "") {
            this.orderState.contact = e.target.value;
            this.orderState.id += e.target.value[0];
        }
    }
    addOrderProd(e) {
        if(e.target.value !== "") {
            this.orderState.product = e.target.value;
        }
    }
    addOrderQuant(e) {
        if(e.target.value !== "") {
            this.orderState.quantity = e.target.value;
            this.orderState.tamount = e.target.value;
        }
    }
    addOrderAmnt(e) {
        if(e.target.value !== "") {
            this.orderState.amount = e.target.value;
            this.orderState.tamount *= e.target.value;
        }
    }
    addOrdertoStore() {
        
        if(!this.orderState.cname && !this.orderState.contact && !this.orderState.product && !this.orderState.quantity) {
            return;
        } else 
        this.props.salesOrder(this.orderState);
        
        this.orderState = {
            id:"",
            cname:"",
            contact:"",
            product:"",
            quantity:"",
            amount: "",
            tamount:""
        }
    }
    // editAOrder(e){
    //     this.props.editOrder(!this.props.edit_Order);
    // }
    // editDoneOrder(i) {
    //     if(!this.orderState.cname && !this.orderState.contact && !this.orderState.product && !this.orderState.quantity) {
    //         this.props.editOrder(true);
    //     } else {
    //     this.props.order.splice(i, 1, this.orderState);

    //     this.orderState = {
    //         id:"",
    //         cname:"",
    //         contact:"",
    //         product:"",
    //         quantity:"",
    //         amount: "",
    //         tamount:""
    //     }
    //     this.props.editOrder(!this.props.edit_Order);
    //     }
    // }
    deleteOrder(i, e) {
        this.props.order.splice(i, 1);
        this.props.editOrder(false);
        this.props.editOrder(true);
    }
    render() {
        const order = this.props.order;
        
        const edit_Order = this.props.edit_Order;
        return (
            <div>
                <h1>Sales Order Store</h1>
                <div id="orders">
                    <h2>Orders</h2>
                    <div>
                        <h3>Add Orders</h3>
                        <table className="tableone">
                            
                            <tr>
                                <th>Customer Name</th>
                                <th>Customer Contact</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                            </tr>
                            <tr>
                                <td><input type="text" onFocus={(e) => e.target.value = ""}  onChange={(e) => this.addOrderName(e)}/></td>
                                <td><input type="text" onFocus={(e) => e.target.value = ""} onChange={(e) => this.addOrderCont(e)}/></td>
                                
                                <td><select onChange={(e) => this.addOrderProd(e)}>
                                    <option value="abc">abc</option>
                                    <option value="def">def</option>
                                    <option value="ghi">ghi</option>
                                    <option value="jkl">jkl</option>
                                    <option value="mno">mno</option>
                                    <option value="pqr">pqr</option>
                                    <option value="stu">stu</option>
                                </select></td>
                                <td><input type="text" onFocus={(e) => e.target.value = ""} onChange={(e) => this.addOrderQuant(e)}/></td>
                                <td><input type="text" onFocus={(e) => e.target.value = ""} onChange={(e) => this.addOrderAmnt(e)}/></td>
                            </tr>
                        </table>
                        <button onClick={() => this.addOrdertoStore()}>Add</button>
                    </div>
                    <div>
                        <h3>Orders</h3>
                        <table className="tabletwo">
                            
                            <tr>
                                <th>Id</th>
                                <th>Customer Name</th>
                                <th>Customer Contact</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Amount</th>
                                <th>Total Amount</th>
                            </tr>
                            {edit_Order ? order.map((v,i) => {
                            return <tr key={i}>
                                <td>{v.id}</td>
                                <td>{v.cname}</td>
                                <td>{v.contact}</td>
                                <td>{v.product}</td>
                                <td>{v.quantity}</td>
                                <td>{v.amount}</td>
                                <td>{v.tamount}</td>
                                {/* <td><button onClick={(e) => this.editAOrder()}>Edit</button></td> */}
                                <td><button onClick={(e) => this.deleteOrder(i, e)}>Delete</button></td>
                            </tr>
                            }) : ""
                            // order.map((v,i) => {
                            // return <tr key={i}>
                            // <td><input type="text" placeholder={v.cname} onChange={(e) => this.addOrderName(e)}/></td>
                            // <td><input type="text" placeholder={v.contact} onChange={(e) => this.addOrderCont(e)}/></td>
                            // <td><input type="text" placeholder={v.product} onChange={(e) => this.addOrderProd(e)}/></td>
                            // <td><input type="text" placeholder={v.quantity} onChange={(e) => this.addOrderQuant(e)}/></td>
                            // <td><input type="text" placeholder={v.amount} onChange={(e) => this.addOrderAmnt(e)}/></td>

                            // <td><button onClick={(i) => this.editDoneOrder(i)}>Done</button></td>
                            // </tr>
                            // })
                        }
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    order: state.salesOrder,
    edit_Order: state.edit_Order,
})


const mapDispatchToProps = (dispatch) => ({
    salesOrder: (payload) => dispatch(salesOrder(payload)),
    editOrder: (payload) => dispatch(editOrder(payload)),
})
// const mapDispatchToProps = {
    
// }

export default connect(mapStateToProps, mapDispatchToProps)(Order)
