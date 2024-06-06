import React from "react"
import { SafeAreaView, View, Image, Text, Button } from "react-native"
import { AppImages } from "../static/Assets"
import { AppColor, AppSizes, OpacityLevel } from "../static/Info"
import Icons from 'react-native-vector-icons/Ionicons';
import { CurrencyFormat } from "../Utilities/Functions";


// Home Page
const HomePage = ({navigation}:any) => {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: AppColor.background}}>

        {/* Header */}
        <View style={{paddingHorizontal: AppSizes.horizontalPadding, }}>
          <View style={{
            borderBottomColor: AppColor.dividerColor, 
            paddingTop: 10, 
            gap: 25,
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
              <View style={{width: 35, justifyContent: 'center', alignItems: 'center', height: 35, borderRadius: 52, backgroundColor: AppColor.iconBg}}>
                <Icons name='notifications-outline' size={20} color="white" />
              </View>

            </View>

            {/* Bottom */}
            <View style={{gap: 7}}>
              <Text style={{color: 'white', opacity: OpacityLevel.medium}}>Total balance</Text>
              <Text style={{color: AppColor.primary, fontSize: 31, fontWeight: '600'}}>{CurrencyFormat(42295)} USD</Text>
            </View>

          </View>
        </View>

      </SafeAreaView>
    )
}

export default HomePage
