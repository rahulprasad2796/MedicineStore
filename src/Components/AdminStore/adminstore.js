import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addMedecine, addOrder, addTeam, editMed, editOrder, editTeam} from '../../Redux/Actions/action';
import "./adminstore.css";


export class Adminstore extends Component {
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
        this.props.addOrder(this.orderState);
        
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
    editAOrder(e){
        this.props.editOrder(!this.props.edit_Order);
    }
    editDoneOrder(i) {
        if(!this.orderState.cname && !this.orderState.contact && !this.orderState.product && !this.orderState.quantity) {
            this.props.editOrder(true);
        } else {
        this.props.order.splice(i, 1, this.orderState);

        this.orderState = {
            id:"",
            cname:"",
            contact:"",
            product:"",
            quantity:"",
            amount: "",
            tamount:""
        }
        this.props.editOrder(!this.props.edit_Order);
        }
    }
    deleteOrder(i, e) {
        this.props.order.splice(i, 1);
        this.props.editOrder(false);
        this.props.editOrder(true);
    }




    // 
    teamState = {
        fname:"",
        lname:"",
        dob:"",
        gender:"",
        exp:"",
        password:""
    }
    addTeamFname(e) {
        if(e.target.value !== "") {
            this.teamState.fname = e.target.value;
        }
    }
    addTeamLname(e) {
        if(e.target.value !== "") {
            this.teamState.lname = e.target.value;
        }
    }addTeamDob(e) {
        if(e.target.value !== "") {
            this.teamState.dob = e.target.value;
        }
    }addTeamGen(e) {
        if(e.target.value !== "") {
            this.teamState.gender = e.target.value;
        }
    }
    addTeamExp(e) {
        if(e.target.value !== "") {
            this.teamState.exp = e.target.value;
        }
    }
    addTeamPass(e) {
        if(e.target.value !== "") {
            this.teamState.password = e.target.value;
        }
    }
    addTeamtoStore() {
        if(!this.teamState.fname && !this.teamState.lname && !this.teamState.dob && !this.teamState.gender && !this.teamState.exp && !this.teamState.password) {
            return;
        } else 
        this.props.addTeam(this.teamState);
        
        this.teamState = {
            fname:"",
            lname:"",
            dob:"",
            gender:"",
            exp:"",
            password:""
        }
    }
    editExec(e) {
        this.props.editTeam(!this.props.edit_Team);
    }
    editDoneTeam(i) {
        if(!this.teamState.fname && !this.teamState.lmame && !this.teamState.dob && !this.teamState.gender && !this.teamState.exp && !this.teamState.password) {
            this.props.editTeam(true);
        } else {
        this.props.team.splice(i, 1, this.teamState);

        this.teamState = {
            fname:"",
            lname:"",
            dob:"",
            gender:"",
            exp:"",
            password:""
        }
        this.props.editTeam(!this.props.edit_Team);
        }
    }
    deleteTeam(i, e) {
        this.props.team.splice(i, 1);
        this.props.editTeam(false);
        this.props.editTeam(true);
    }





    // 
    medState = {
        name:"",
        mfName:"",
        price:"",
        stock:"",
        discount:""
    }

    addMedName(e) {
        if(e.target.value !== "") {
            this.medState.name = e.target.value;
        }
    }
    addMedmfName(e) {
        if(e.target.value !== "") {
            this.medState.mfName = e.target.value;
        }
    }
    addMedPrice(e) {
        if(e.target.value !== "") {
            this.medState.price = e.target.value;
        }
    }
    addMedStock(e){
        if(e.target.value !== "") {
            this.medState.stock = e.target.value;
        }
    }
    addMedDiscount(e){
        if(e.target.value !== "") {
            this.medState.discount = e.target.value;
        }
    }
    addMedtoStore() {
        if(!this.medState.name && !this.medState.mfName && !this.medState.price && !this.medState.stock && !this.medState.discount) {
            return;
        } else 
        this.props.addMedecine(this.medState);
        this.medState = {
            name:"",
            mfName:"",
            price:"",
            stock:"",
            discount:""
        }
    }
    editStore(e) {
        this.props.editMed(!this.props.edit_Med);
    }
    editDone(i,e) {
        console.log(i);

        if(!this.medState.name && !this.medState.mfName && !this.medState.price && !this.medState.stock && !this.medState.discount) {
            this.props.editMed(true);
        } else {
        this.props.medicine.splice(i, 1, this.medState);

        this.medState = {
            name:"",
            mfName:"",
            price:"",
            stock:"",
            discount:""
        }
        this.props.editMed(!this.props.edit_Med);
        }
    }
    deleteStore(i, e) {
        this.props.medicine.splice(i, 1);
        this.props.editMed(false);
        this.props.editMed(true);
    }
    render() {
        const med = this.props.medicine;
        const edit_Med = this.props.edit_Med;

        const team = this.props.team;
        const edit_Team = this.props.edit_Team;

        const order = this.props.order;
        const edit_Order = this.props.edit_Order;
        
        
        return (
            <div id="mainadmin">
                <h1>Admin Management Store</h1>
                <div id="inventory">
                    <h2>Inventory</h2>
                    <div id="addmed">
                        <h3>Add Medecines</h3>
                        <table className="tableone">
                            <tr>
                                <th>Name</th>
                                <th>Manufacturer Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Discount</th>
                            </tr>
                            <tr>
                                <td><input type="text" onChange={(e) => this.addMedName(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addMedmfName(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addMedPrice(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addMedStock(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addMedDiscount(e)}/></td>
                            </tr>
                        </table>
                        <button onClick={() => this.addMedtoStore()}>Add</button>
                    </div>
                    <div>
                        <h3>Medicines</h3>
                        <p>Note: To edit a row make changes to each cells otherwise it will remain same.</p>
                        <table className="tabletwo">
                        <tr>
                            <th>Name</th>
                            <th>Manufacturer Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Discount</th>
                        </tr>
                        {edit_Med ? med.map((v,i) => {
                            return <tr key={i}>
                                <td>{v.name}</td>
                                <td>{v.mfName}</td>
                                <td>{v.price}</td>
                                <td>{v.stock}</td>
                                <td>{v.discount}</td>
                                <td><button onClick={(e) => this.editStore(i, e)}>Edit</button></td>
                                <td><button onClick={(e) => this.deleteStore(i, e)}>Delete</button></td>
                            </tr>
                        }) : med.map((v,i) => {
                            return <tr key={i}>
                                <td><input type="text" placeholder={v.name} onChange={(e) => this.addMedName(e)}/></td>
                                <td><input type="text" placeholder={v.mfName} onChange={(e) => this.addMedmfName(e)}/></td>
                                <td><input type="text" placeholder={v.price} onChange={(e) => this.addMedPrice(e)}/></td>
                                <td><input type="text" placeholder={v.stock} onChange={(e) => this.addMedStock(e)}/></td>
                                <td><input type="text" placeholder={v.discount} onChange={(e) => this.addMedDiscount(e)}/></td>
                                <td><button onClick={(e) => this.editDone(i)}>Done</button></td>
                            </tr>
                        })}
                        </table>
                    </div>
                </div>
                <div id="team">
                    <h2>Team</h2>
                    <div id="addteam">
                        <h3>Add Sales Executives</h3>
                        <table className="tableone">
                            
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Experience Years</th>
                                <th>Password</th>
                            </tr>
                            <tr>
                                <td><input type="text" onChange={(e) => this.addTeamFname(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addTeamLname(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addTeamDob(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addTeamGen(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addTeamExp(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addTeamPass(e)}/></td>
                            </tr>
                        </table>
                        <button onClick={() => this.addTeamtoStore()} >Add</button>
                    </div>
                    <div>
                        <h3>Sales Executives</h3>
                        <p>Note: To edit a row make changes to each cells otherwise it will remain same.</p>

                        <table className="tabletwo">
                            
                            <tr>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Experience Years</th>
                                <th>Password</th>
                            </tr>
                            {edit_Team ? team.map((v,i) => {
                            return <tr key={i}>
                                <td>{v.fname}</td>
                                <td>{v.lname}</td>
                                <td>{v.dob}</td>
                                <td>{v.gender}</td>
                                <td>{v.exp}</td>
                                <td>{v.password}</td>
                                <td><button onClick={(e) => this.editExec()}>Edit</button></td>
                                <td><button onClick={(e) => this.deleteTeam(i, e)}>Delete</button></td>
                            </tr>
                            }) : team.map((v,i) => {
                                return <tr key={i}>
                                <td><input type="text" placeholder={v.fname} onChange={(e) => this.addTeamFname(e)}/></td>
                                <td><input type="text" placeholder={v.lname} onChange={(e) => this.addTeamLname(e)}/></td>
                                <td><input type="text" placeholder={v.dob} onChange={(e) => this.addTeamDob(e)}/></td>
                                <td><input type="text" placeholder={v.gender} onChange={(e) => this.addTeamGen(e)}/></td>
                                <td><input type="text" placeholder={v.exp} onChange={(e) => this.addTeamExp(e)}/></td>
                                <td><input type="text" placeholder={v.password} onChange={(e) => this.addTeamPass(e)}/></td>
                                <td><button onClick={(e) => this.editDoneTeam(i)}>Done</button></td>
                            </tr>
                            })}
                        </table>
                    </div>
                </div>
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
                                <td><input type="text" onChange={(e) => this.addOrderName(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addOrderCont(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addOrderProd(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addOrderQuant(e)}/></td>
                                <td><input type="text" onChange={(e) => this.addOrderAmnt(e)}/></td>
                            </tr>
                        </table>
                        <button onClick={() => this.addOrdertoStore()}>Add</button>
                    </div>
                    <div>
                        <h3>Orders</h3>
                        <p>Note: To edit a row make changes to each cells otherwise it will remain same.</p>

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
                                <td><button onClick={(e) => this.editAOrder()}>Edit</button></td>
                                <td><button onClick={(e) => this.deleteOrder(i, e)}>Delete</button></td>
                            </tr>
                            }) : order.map((v,i) => {
                            return <tr key={i}>
                            <td><input type="text" placeholder={v.cname} onChange={(e) => this.addOrderName(e)}/></td>
                            <td><input type="text" placeholder={v.contact} onChange={(e) => this.addOrderCont(e)}/></td>
                            <td><input type="text" placeholder={v.product} onChange={(e) => this.addOrderProd(e)}/></td>
                            <td><input type="text" placeholder={v.quantity} onChange={(e) => this.addOrderQuant(e)}/></td>
                            <td><input type="text" placeholder={v.amount} onChange={(e) => this.addOrderAmnt(e)}/></td>

                            <td><button onClick={(e) => this.editDoneOrder(i)}>Done</button></td>
                            </tr>
                            })}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.users,
    medicine: state.medicine,
    edit_Med: state.edit_Med,
    team: state.team,
    edit_Team: state.edit_Team,
    order: state.order,
    edit_Order: state.edit_Order,
})

const mapDispatchToProps = (dispatch) => ({
    addMedecine: (payload) => dispatch(addMedecine(payload)),
    editMed: (payload) => dispatch(editMed(payload)),
    addTeam: (payload) => dispatch(addTeam(payload)),
    editTeam: (payload) => dispatch(editTeam(payload)),
    addOrder: (payload) => dispatch(addOrder(payload)),
    editOrder: (payload) => dispatch(editOrder(payload)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Adminstore)


