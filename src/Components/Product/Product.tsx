// import { Component } from "react";
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button';
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Tabs from "@mui/material/Tabs"
// import Tab from "@mui/material/Tab"



// interface ProductState{
//     count:number;
// }
// const data = [
//     {
//         name: "PainAway",
//         price: "100rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "50 ML"
//     },
//     {
//         name: "RelaxoLife",
//         price: "200rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
//         quantity: "250 GM"
//     },
//     {
//         name: "GlowMagic",
//         price: "300rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
//         quantity: "100 GM"
//     },
//     {
//         name: "SilkStrand",
//         price: "400rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "250 GM"
//     }
// ];

// export default class Product extends Component {
//     constructor(props:ProductState) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }
//     handeButtonClick = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }

//     render() {
//         return (
//             <>
//                 <Tabs sx={{}}>
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="All" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Family care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Fitness & Wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Skin Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Hair Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Lip care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Sexual wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Women's Care Baby care" />
//                 </Tabs>
//                 <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                     <List sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                         {data.map((item, index) => (
//                             <ListItem key={index} sx={{ height: "22rem", width: "13rem", border: "1px solid red", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                                 <ListItemAvatar>
//                                     <Avatar
//                                         src={item.image}
//                                         alt={item.name}
//                                         sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                         variant="square"
//                                     />
//                                 </ListItemAvatar>
//                                 <ListItemText primary={item.name} />
//                                 <ListItemText primary={item.price} sx={{ fontSize: "1.5rem" }} />
//                                 <ListItemText primary={`Qty: ${item.quantity}`} sx={{ border: "1px solid red", width: "10rem", textAlign: "center" }} />
//                                 <Button variant="contained" sx={{ width: "70px" }} onClick={this.handeButtonClick}>Add({this.state.count})</Button>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             </>
//         )
//     }
// }



// import React, { Component } from "react";
// import Box from '@mui/material/Box'
// import Button from '@mui/material/Button';
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Tabs from "@mui/material/Tabs"
// import Tab from "@mui/material/Tab"

// interface ProductProps {
//     name: string,
//     price: string,
//     image: string,
//     quantity: string
// }

// interface ProductState {
//     count: number;
// }
// const data = [
//     {
//         name: "PainAway",
//         price: "100rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "50 ML"
//     },
//     {
//         name: "RelaxoLife",
//         price: "200rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
//         quantity: "250 GM"
//     },
//     {
//         name: "GlowMagic",
//         price: "300rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
//         quantity: "100 GM"
//     },
//     {
//         name: "SilkStrand",
//         price: "400rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "250 GM"
//     }
// ];

// export default class Product extends Component<ProductProps, ProductState> {
//     constructor(props: ProductProps) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     handleButtonClick = () => {
//         this.setState((prevState) => ({
//             count: prevState.count + 1
//         }));
//     }

//     render() {
//         return (
//             <>
//                 <Tabs sx={{}}>
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="All" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Family care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Fitness & Wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Skin Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Hair Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Lip care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Sexual wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Women's Care Baby care" />
//                 </Tabs>
//                 <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                     <List sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                         {data.map((item, index) => (
//                             <ListItem key={index} sx={{ height: "22rem", width: "13rem", border: "1px solid red", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                                 <ListItemAvatar>
//                                     <Avatar
//                                         src={item.image}
//                                         alt={item.name}
//                                         sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                         variant="square"
//                                     />
//                                 </ListItemAvatar>
//                                 <ListItemText primary={item.name} />
//                                 <ListItemText primary={item.price} sx={{ fontSize: "1.5rem" }} />
//                                 <ListItemText primary={`Qty: ${item.quantity}`} sx={{ border: "1px solid red", width: "10rem", textAlign: "center" }} />
//                                 <Button variant="contained" sx={{ width: "70px" }} onClick={this.handleButtonClick}>Add({this.state.count})</Button>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             </>
//         )
//     }
// }



// import React, { Component } from "react";
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// const data = [
//     {
//         name: "PainAway",
//         price: "100rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "50 ML"
//     },
//     {
//         name: "RelaxoLife",
//         price: "200rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
//         quantity: "250 GM"
//     },
//     {
//         name: "GlowMagic",
//         price: "300rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
//         quantity: "100 GM"
//     },
//     {
//         name: "SilkStrand",
//         price: "400rs",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
//         quantity: "250 GM"
//     }
// ];

// interface ProductState {
//     counts: number[];
// }

// export default class Product extends Component<{}, ProductState> {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             counts: Array(data.length).fill(0)
//         };
//     }

//     handleButtonClick = (index: number) => {
//         this.setState((prevState) => {
//             const newCounts = [...prevState.counts];
//             newCounts[index] += 1;
//             return { counts: newCounts };
//         });
//     }

//     render() {
//         return (
//             <>
//                 <Tabs sx={{}}>
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="All" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Family care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Fitness & Wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Skin Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Hair Care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Lip care" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Sexual wellness" />
//                     <Tab sx={{ fontWeight: 600, color: 'black' }} label="Women's Care Baby care" />
//                 </Tabs>
//                 <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                     <List sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
//                         {data.map((item, index) => (
//                             <ListItem key={index} sx={{ height: "22rem", width: "13rem", border: "1px solid red", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                                 <ListItemAvatar>
//                                     <Avatar
//                                         src={item.image}
//                                         alt={item.name}
//                                         sx={{ width: "100%", height: "100%", objectFit: "cover" }}
//                                         variant="square"
//                                     />
//                                 </ListItemAvatar>
//                                 <ListItemText primary={item.name} />
//                                 <ListItemText primary={item.price} sx={{ fontSize: "1.5rem" }} />
//                                 <ListItemText primary={`Qty: ${item.quantity}`} sx={{ border: "1px solid red", width: "10rem", textAlign: "center" }} />
//                                 <Button variant="contained" sx={{ width: "70px" }} onClick={() => this.handleButtonClick(index)}>Add({this.state.counts[index]})</Button>
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             </>
//         );
//     }
// }

import { Component } from "react";
import Box from '@mui/material/Box';
import List from "@mui/material/List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import ProductItem from "./ProductItem"; // Make sure this path is correct
// import ProductItem from "./Items/ProductItem";
// import ProductItem from "./ProductItem"; // Adjust the path relative to Product.tsx
// import ProductItem from "./Items/ProductItem"; // Example: if ProductItem.tsx is in 'Items' directory

const data = [
    {
        name: "PainAway",
        price: "100rs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
        quantity: "50 ML"
    },
    {
        name: "RelaxoLife",
        price: "200rs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG82dmMUJm2aANvVCaaYTCcrkU3bWmiWoJpt_Cav4udvsAQgCs4aKCARUp6_oNL0_6_Xs&usqp=CAU",
        quantity: "250 GM"
    },
    {
        name: "GlowMagic",
        price: "300rs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuaObcVQ8lSqIN3j8056qUy-3hVn6Sn8bv1NMAlyFsP1yBS75dy6swHftn0jA--M-XTZs&usqp=CAU",
        quantity: "100 GM"
    },
    {
        name: "SilkStrand",
        price: "400rs",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSpxy8Dk4rFAvi28W-Am9W5Z1J05ey0P807oN_YX1UaTqoVT4Iv6MzkzcwND4GueLdEA&usqp=CAU",
        quantity: "250 GM"
    }
];

interface ProductState {
    counts: number[];
}

export default class Product extends Component<{}, ProductState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            counts: Array(data.length).fill(0)
        };
    }

    handleButtonClick = (index: number, action: 'increase' | 'decrease') => {
        this.setState((prevState) => {
            const newCounts = [...prevState.counts];
            if (action === 'increase') {
                newCounts[index] += 1;
            } else if (action === 'decrease' && newCounts[index] > 0) {
                newCounts[index] -= 1;
            }
            return { counts: newCounts };
        });
    }

    render() {
        return (
            <>
                <Tabs sx={{}}>
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="All" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Family care" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Fitness & Wellness" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Skin Care" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Hair Care" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Lip care" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Sexual wellness" />
                    <Tab sx={{ fontWeight: 600, color: 'black' }} label="Women's Care Baby care" />
                </Tabs>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                    {/* <List sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}> */}
                        {/* {data.map((item, index) => (
                            <ProductItem
                                key={index}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                count={this.state.counts[index]}
                                onIncrease={() => this.handleButtonClick(index, 'increase')}
                                onDecrease={() => this.handleButtonClick(index, 'decrease')}
                            />
                        ))}
                    </List> */}
                </Box>
            </>
        );
    }
}

