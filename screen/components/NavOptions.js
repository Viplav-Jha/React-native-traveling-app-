import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import  tw  from 'tailwind-react-native-classnames'
import { Icon } from "react-native-elements"

const data = [
    {
        id:"123",
        title:"Get a ride",
        image:"https://links.papareact.com/3pn",
        screen:"Mapscreen"
    },
    {
        id:"456",
        title:"Order food",
        image:"https://ubereats.detpak.com/globalassets/uber-eats/images/products/uber_eats_paper_bag_2.png/Medium",
        screen:"MEatFood"
    },
    

]



const NavOptions = () => {
    return (
       <FlatList
         data={data}
         horizontal
         keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-8 bg-gray-100 m-2 w-40`}>
            <View>
                <Image 
                  style={{width:120,height:120,resizeMode:'contain'}}
                  source= {{uri: item.image}}
                />
                <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                name="arrowright" color="white" type="antdesign" />
            </View>
          </TouchableOpacity>
         )}
          
       />
     

    )
}

export default NavOptions

const styles = StyleSheet.create({})
