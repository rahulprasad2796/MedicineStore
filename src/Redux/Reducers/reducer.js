const initialState = {
    users: ["test-admin", "test-sales"],
    medicine: [{
        name:"jfwrr5",
        mfName:"9hygwy",
        price:"0ksnij",
        stock:"2hgtfwr",
        discount:"8uhsuh"
    },{
        name:"jfwrr5",
        mfName:"9hygwy",
        price:"0ksnij",
        stock:"2hgtfwr",
        discount:"8uhsuh"
    },{
        name:"jfwrr5",
        mfName:"9hygwy",
        price:"0ksnij",
        stock:"2hgtfwr",
        discount:"8uhsuh"
    }],
    edit_Med: true,
    team: [{
        fname:"ijijij",
        lname:"ppamakij",
        dob:"abuyag",
        gender:"qju99a",
        exp:"0i00",
        password:"ijoia"
    },{
        fname:"ijijij",
        lname:"ppamakij",
        dob:"abuyag",
        gender:"qju99a",
        exp:"0i00",
        password:"ijoia"
    },{
        fname:"ijijij",
        lname:"ppamakij",
        dob:"abuyag",
        gender:"qju99a",
        exp:"0i00",
        password:"ijoia"
    }],
    edit_Team: true,
    order: [{
        id: "4uhduh",
        cname:"iijsja",
        contact:"ajijdia",
        product:"ajdiaj",
        quantity:"2",
        amount: "2",
        tamount: "4"
    },{
        id: "4uduh",
        cname:"iijsja",
        contact:"ajijdia",
        product:"ajdiaj",
        quantity:"3",
        amount: "3",
        tamount: "9"
    },{
        id: "4uhdu",
        cname:"iijsja",
        contact:"ajijdia",
        product:"ajdiaj",
        quantity:"4",
        amount: "4",
        tamount: "16"
    }],
    edit_Order: true,
    salesOrder:[]
}

function appReducers(state = initialState, { type, payload }){
    switch (type) {

    case "GET_USERS":
        {return { ...state, users : payload }}
    case "ADD_MEDECINE":
        {return {...state, medicine : [...state.medicine, payload] }}
    case "EDIT_MED":
        {return { ...state, edit_Med : payload }}
    case "ADD_TEAM":
        {return {...state, team : [...state.team, payload] }}
    case "EDIT_TEAM":
        {return { ...state, edit_Team : payload }}   
    case "ADD_ORDER":
        {return {...state, order : [...state.order, payload] }}
    case "EDIT_ORDER":
        {return { ...state, edit_Order : payload }}
    case "SALES_ORDER":
        {return {...state, salesOrder : [...state.salesOrder, payload] }}
    default:
        return state
    }
}

export default appReducers;