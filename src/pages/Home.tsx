import React, { useState } from "react"
import { SafeAreaView, View, Image, Text, Button, ScrollView, FlatList, StyleSheet, Pressable } from "react-native"
import { AppImages } from "../static/Assets"
import { AppColor, AppSizes, OpacityLevel } from "../static/Info"
import Icons from 'react-native-vector-icons/Ionicons';
import { CurrencyFormat } from "../Utilities/Functions";
import { DummyTransaction, HomePageTabs, QuickLink } from "../static/JsonMap";
import Icon from 'react-native-vector-icons/Ionicons';
import { PageSection } from "../components/Components";




// Home Page
const HomePage = ({navigation}:any) => {

  const [active, setActive] = useState(1);

  const RenderItem = ({ item }:any) => (
    <Pressable onPress={()=> setActive(item.id)} style={{backgroundColor: active == item.id ? AppColor.primary : AppColor.iconBg , paddingHorizontal: 18, borderRadius: 20, paddingVertical: 7}}>
      <Text style={{color: active == item.id ? "black" : 'white', fontSize: 15, fontWeight: '500'}}>{item.title}</Text>
    </Pressable>
  );

  const RenderTransaction = ({ item }:any) => (
    <Pressable onPress={()=> setActive(item.id)} style={{paddingVertical: 15, borderBottomWidth: 1, borderColor: AppColor.iconBg, flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
        <View style={{height: 50, width: 50, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: item.type == 'credit' ? AppColor.primary : AppColor.secondary}}>
          <Icon name={item.type == 'debit' ? "arrow-up-outline" : "arrow-down-outline"} size={24} color={item.type == 'debit' ? "white" : 'black'} />
        </View>
        <View style={{gap: 5}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>{item.title}</Text>
          <Text style={{color: 'white', opacity: OpacityLevel.low, fontSize: 14, fontWeight: '500'}}>{item.date}</Text>
        </View>
      </View>
      <Text style={{color: 'white', fontSize: 18, fontWeight: '500'}}>{item.type == 'credit' ? "+" : "-"}${item.amount}</Text>
    </Pressable>
  );

  return (

    <View style={{ backgroundColor: AppColor.background}}>
      <SafeAreaView style={{gap: 20}}>

        {/* Header */}
        <View style={{paddingHorizontal: AppSizes.horizontalPadding, }}>
          <View style={{
            borderBottomColor: AppColor.dividerColor, 
            paddingTop: 10, 
            gap: 35,
            borderWidth: 1,
            paddingBottom: 10
          }}>

            {/* Top */}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

              {/* Left */}
              <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>

                {/* Profile Image */}
                <Image
                  source={AppImages.profileImage}
                  style={{width: 50, height: 50, borderRadius: 10}}
                />

                {/* Text Contents */}
                <View style={{gap: 3}}>
                  <Text style={{color: "white", fontSize: 20}}>Tony Kross</Text>
                  <Text style={{color: "white", opacity: OpacityLevel.medium}}>Good morning</Text>
                </View>

              </View>

              {/* Right */}
              <View style={{width: 45, justifyContent: 'center', alignItems: 'center', height: 45, borderRadius: 52, backgroundColor: AppColor.iconBg}}>
                <Icons name='notifications-outline' size={25} color="white" />
              </View>

            </View>

            {/* Bottom */}
            <View style={{gap: 10}}>
              <Text style={{color: 'white', opacity: OpacityLevel.medium}}>Total balance</Text>
              <Text style={{color: AppColor.primary, fontSize: 31, fontWeight: '600'}}>{CurrencyFormat(42295)} USD</Text>
            </View>

          </View>
        </View>

        {/* Quick Links */}
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 30}}>
          {QuickLink.map((v:any, i:any) => 
            <View key={i} style={{alignItems: 'center', gap: 8}}>
              <View style={{height: 60, width: 60, borderRadius: 25, justifyContent: 'center', alignItems: 'center', backgroundColor: AppColor.iconBg}}>
                <Icon name={v.icon} size={24} color={"white"} />
              </View>
              <Text style={{color: 'white', fontSize: 15}}>{v.title}</Text>
            </View>
          )}
        </View>

        {/* Section Title */}
        <View style={{paddingHorizontal: AppSizes.horizontalPadding, marginTop: 5}}>
          <PageSection title="Recent activity" />
        </View>

        {/* Horizontal FlatList */}
        <View style={{paddingHorizontal: AppSizes.horizontalPadding}}>
          <FlatList
            horizontal
            data={HomePageTabs}
            renderItem={({ item }) => <RenderItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              gap: 10
            }}
          />
        </View>

          {/* Transaction History */}
        <View style={{paddingHorizontal: AppSizes.horizontalPadding}}>
          <FlatList
            data={DummyTransaction}
            renderItem={({ item }) => <RenderTransaction item={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
            }}
          />
        </View>

      </SafeAreaView>
      
    </View>
  )

}

export default HomePage
