const INITIAL_STATE={
    products:[
        {
            id: 1,
            title: "Samsung S22",
            description: "black in color",
            price: "2500",
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
          },
          {
            id: 2,
            title: "Samsung M21",
            description: "white in color",
            price: "2300",
            img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
          },
          {
            id: 3,
            title: "Redmi 9",
            description: "black in color",
            price: "3500",
            img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
            quantity: 1,
          },
          {
            id: 4,
            title: "Iphone 12",
            description: "Best mobile ever",
            price: "90500",
            img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
            quantity: 1,
          },
          {
            id: 5,
            title: "Samsung S23",
            description: "black in color",
            price: "2500",
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
          },
          {
            id: 6,
            title: "Redmi 10",
            description: "black in color",
            price: "3500",
            img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
            quantity: 1,
          },
          {
            id: 7,
            title: "Samsung S21",
            description: "black in color",
            price: "2500",
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
          },
          {
            id: 8,
            title: "Iphone 10",
            description: "Best mobile ever",
            price: "90500",
            img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
            quantity: 1,
          },
          {
            id: 9,
            title: "Samsung S25",
            description: "black in color",
            price: "2500",
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
          },
    ],
    cart:[],
    currentItem:null
}

const rootReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            const item=state.products.find(
                (product)=>product.id==action.payload.id
            )
            return{
             ...state,
             cart:[...state.cart, { ...item, qty: 1 }]
            }

        case "LOAD_CURRENT_ITEM":
            return{
                ...state,
                currentItem: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;