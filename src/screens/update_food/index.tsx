import {
  Alert,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppDropDown from '../../components/AppDropDown';
import { WIN_HEIGHT, WIN_WIDTH } from '../../utils/constant';
import { Colors } from '../../assets/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AddIcon, DownInvisibleIcon } from '../../assets/images';
import SizedBox from '../../components/SizedBox';
import AppButton from '../../components/AppButton';
import { Dropdown } from 'react-native-element-dropdown';
import { getFoodResturantMapping, getResturantMapping, getSessionMapping, clearTrey, LoadFood } from '../../api/userService';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Toast from "react-native-toast-message";


/* -------------------------------------------------------------------------- */
/*                               Dummy Tray List                              */
/* -------------------------------------------------------------------------- */
const trayList = [
  {
    id: 1,
    title: 'Tray 1',
  },
  {
    id: 2,
    title: 'Tray 2',
  },
  {
    id: 3,
    title: 'Tray 3',
  },
  {
    id: 4,
    title: 'Tray 4',
  }
];

// const dummytrayList = [
//   {
//     id: 5,
//     title: 'Tray 5',
//   },
//   {
//     id: 6,
//     title: 'Tray 6',
//   }
// ];

/* -------------------------------------------------------------------------- */

type Props = {};

const UpdateFood = (props: Props) => {
  const [showUpdateFoodModal, setUpdateFoodModal] = useState(false);
  const [selectFoodModal, setSelectFoodModal] = useState(false);
  const [selectsession, setSelectSession] = useState<any[]>([]);
  const [resturant, setResturant] = useState<any[]>([]);
  const [food, setFood] = useState<any[]>([]);
  const [count, setCount] = useState<number>(0);
  const [selectedTray, setSelectedTray] = useState<{
    id: number;
    title: string;
  } | null>(null);
  const fooddet = [{ ResturantId: 0, SessionID: 0, SelectedFoodID: 0, foodResturantID: 0 }];
  const [addfoodTray, setAddfoodTray] = useState(fooddet);



  const handleUpdateFood = (id: number, title: string) => {
    setUpdateFoodModal(true);
    setSelectedTray({ id, title });
  };

  const handleUpdatedisableFood = (id: number, title: string) => {
    // setUpdateFoodModal(true);
  };


  useEffect(() => {
    fetchSession();
  }, []);

  const fetchSession = async () => {
    try {
      const res = await getSessionMapping();
      setSelectSession(res.Data);
      console.log("res<==>234", res)
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchResturant = async () => {
          // console.log("rest-resturantId",resturantId)

    try {
      const res = await getResturantMapping(5);
      console.log("rest-res",res)
      setResturant(res.Data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchFoodByResturant = async (restaurantID : number, SessionID: number) => {
    console.log("SessionID",SessionID)
        console.log("restaurantID",restaurantID)

    try {
      const res = await getFoodResturantMapping(restaurantID, SessionID);
      setFood(res.Data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const LoadFoodByTray = async () => {
    console.log("selectedMachine",selectedMachine)
    if (
      !selectedMachine?.machineID ||
      !selectedTray?.id ||
      !addfoodTray[0]?.ResturantId
    ) {
      console.log("Missing required data");
      return;
    }
    console.log("llloooiii",selectedMachine?.machineID, selectedTray?.id, addfoodTray[0]?.foodResturantID, count)
    try {
      const res = await LoadFood(selectedMachine?.machineID, selectedTray?.id, addfoodTray[0]?.foodResturantID, count);
      console.log("res:", res);
      if (res.returnCode == 0) {
        handlecancel();
        Toast.show({
          type: "success",
          text1: "Success",
          text2: res?.message,
        });
      }
      else {
        handlecancel();
        Toast.show({
          type: "error",
          text1: "Error",
          text2: res?.message,
        });
      }
    } catch (error) {
      handlecancel();
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Something went wrong",
      });
    }
  };

  const handleChangeSession = (e: any) => {
console.log("handleChangeSession",e?.foodSessionID);
  fetchResturant();
   setAddfoodTray(prev =>
      prev.map(item => ({
        ...item,
        SessionID: e?.foodSessionID,
      }))
    )

  }

  const handleChangeResturant = (e: any) => {
console.log("e-resturant",e);
 setAddfoodTray(prev =>
      prev.map(item => ({
        ...item,
        ResturantId: e?.restaurantID
      }))
    )
    fetchFoodByResturant(addfoodTray[0]?.ResturantId,addfoodTray[0]?.SessionID)

  }

  const handleChangeFood = (e: any) => {
    console.log("hhh-Food", e);
    setAddfoodTray(prev =>
      prev.map(item => ({
        ...item,
        SessionID: e?.foodSessionID,
        foodResturantID: e?.foodResturantID
      }))
    )
  }
  const selectedMachine = useSelector(
    (state: RootState) => state.machine.selectedMachine
  );


  const clearAllTrey = async () => {
          console.log("kkooiii",selectedMachine?.machineID)

    try {
      const machineID = selectedMachine?.machineID;
      if (machineID === undefined) {
        console.log("Machine ID is missing");
        return;
      }
      const res = await clearTrey(machineID);
      console.log("kkooiii",res)
    } catch (error) {
      console.log("Error:", error);
    }
  }



  const addcount = () => {
    setCount(prev => Math.min(prev + 1, 25));
  };

  const decreasecount = () => {
    setCount(prev => Math.max(prev - 1, 0));
  };

  const handlecancel = () => {
    setUpdateFoodModal(false);
    setCount(0);
    setAddfoodTray(prev =>
      prev.map(item => ({
        ...item,
        SessionID: 0,
        ResturantId: 0,
        SelectedFoodID: 0
      }))
    )
  }




  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={
          showUpdateFoodModal ? 'rgba(0, 0, 0, 0.5)' : Colors.white
        }
      />

      <View style={styles.textcolumn}>
        <Text style={styles.textcolumntag}>{selectedMachine?.machineName}</Text>
      </View>

      {/* <AppDropDown /> */}
      <View style={styles.foodGrid}>
        {trayList?.map((item, i) => (
          <FoodCard handleUpdateFood={handleUpdateFood} key={i} data={item} />
        ))}

        {/* { dummytrayList?.map((item, i) => (
          <DisableFoodCard handleUpdateFood={handleUpdatedisableFood} key={i} data={item} />
        ))} */}

      </View>

      <SizedBox height={20} />

      <TouchableOpacity style={[styles.clearTray, { opacity: 0.5 }]} onPress={() => clearAllTrey()}>
        <Text style={styles.clearTrayText}>Clear all Tray</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showUpdateFoodModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedTray?.title}</Text>
            <View style={styles.LoadContainer}>
              <View style={styles.loadView}>
                <Text style={styles.loadText}>Load : {count}</Text>
              </View>
              <SizedBox width={30} />
              <View style={styles.loadView}>
                <Text style={styles.loadText}>Stock : 0</Text>
              </View>
            </View>
            <Dropdown
              style={styles.modalDDContainer}
              selectedTextStyle={styles.dDText}
              inputSearchStyle={styles.inputSearchStyle}
              data={selectsession}
              maxHeight={300}
              labelField="foodSessionName"
              valueField="foodSessionID"
              placeholder="Select Session"
              onChange={handleChangeSession}
              value={addfoodTray[0]?.SessionID}
            />
            <Dropdown
              style={styles.modalDDContainer}
              selectedTextStyle={styles.dDText}
              inputSearchStyle={styles.inputSearchStyle}
              data={resturant}
              maxHeight={300}
              labelField="restaurantName"
              valueField="restaurantID"
              placeholder="Select Resturant"
              onChange={handleChangeResturant}
              value={addfoodTray[0]?.ResturantId}
            />
            <Dropdown
              style={styles.modalDDContainer}
              selectedTextStyle={styles.dDText}
              inputSearchStyle={styles.inputSearchStyle}
              data={food}
              maxHeight={300}
              labelField="foodName"
              valueField="foodResturantID"
              placeholder="Select Food"
              onChange={handleChangeFood}
              value={addfoodTray[0]?.SelectedFoodID}

            />
            <View style={styles.countContainer}>
              <AppButton onPress={() => decreasecount()} textColor={Colors.white} buttonColor={Colors.countButtonColor} height={80} width={80} buttonText={'-'} />
              <SizedBox width={15} />
              <View style={styles.count}>
                <Text style={styles.countText}>{count}</Text>
              </View>
              <SizedBox width={15} />
              <AppButton onPress={() => addcount()} textColor={Colors.white} buttonColor={Colors.countButtonColor} height={80} width={80} buttonText={'+'} />
            </View>

            <View style={styles.buttonGroup}>
              <AppButton onPress={() => handlecancel()} textColor={Colors.white} buttonColor={Colors.rejectedColor} width={WIN_WIDTH * .36} buttonText="Cancel" />
              <View style={{ flex: 1 }} />
              <AppButton onPress={() => LoadFoodByTray()} width={WIN_WIDTH * .36} buttonText="Add" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateFood;


type FoodCardProps = {
  data: {
    id: number;
    title: string;
  };
  handleUpdateFood: (id: number, title: string) => void;
};

const FoodCard = (props: FoodCardProps) => {
  let { data, handleUpdateFood } = props;

  return (
    <View style={styles.foodIconContainer}>
      <TouchableOpacity
        onPress={() => handleUpdateFood(data?.id, data?.title)}
        style={[styles.foodIconWrap]}>
        <Image style={styles.addIcon} source={AddIcon} />
        <Text style={styles.trayTitle}>{data?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};



const DisableFoodCard = (props: FoodCardProps) => {
  let { data, handleUpdateFood } = props;

  return (
    <View style={styles.foodIconContainer}>
      <TouchableOpacity
        // onPress={() => handleUpdateFood(data?.id, data?.title)}
        style={[styles.foodIconWrap]}>
        <Image style={styles.addIcon} source={AddIcon} />
        <Text style={styles.dummytrayTitle}>{data?.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    height: WIN_HEIGHT,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  foodGrid: {
    justifyContent: 'center',
    // alignItems:'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: WIN_WIDTH - 20,
    marginTop: 20,
  },
  foodIconContainer: {
    width: WIN_WIDTH * 0.465,
    height: WIN_WIDTH * 0.5,
    padding: 10,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#000'
  },
  dropdown: {
    width: WIN_WIDTH * 0.9,
    height: 50,
    borderColor: '#4A90E2',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    elevation: 3,
  },
  textcolumn: {
    width: WIN_WIDTH * 0.85,
    height: 60,
    borderWidth: 1,
    borderRadius: 60,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  textcolumntag: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.black
  },
  foodIconWrap: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#00000010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon: {
    resizeMode: 'contain',
    height: 60,
    position: 'absolute',
  },
  trayTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.black,
    marginTop: 10,
    position: 'absolute',
    bottom: 15,
  },
  dummytrayTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#808080',
    marginTop: 10,
    position: 'absolute',
    bottom: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: WIN_WIDTH - 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.text20,
  },
  LoadContainer: {
    flexDirection: 'row',
    height: 70,
    marginTop: 20,
  },
  loadView: {
    flex: 1,
    borderRadius: 6,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadText: {
    fontSize: 22,
    color: Colors.text40,
    fontFamily: 'Inter-SemiBold',
  },
  modalDDContainer: {
    backgroundColor: '#EDEDED40',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#20202020',
    flexDirection: 'row',
    height: 60,
    width: WIN_WIDTH - 80,
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20
  },
  dDText: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: Colors.text20,
  },
  dDArrow: {
    resizeMode: 'contain',
    height: 20,
    width: 20,
    position: 'absolute',
    right: 20,
  },
  countContainer: {
    flexDirection: 'row',
    height: 80,
    marginTop: 30,
  },
  count: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1, borderRadius: 8,
    borderColor: '#00525A40',
    backgroundColor: '#F7FFFA'
  },
  countText: {
    fontFamily: 'Inter-Bold',
    fontSize: 30,
    color: '#2B2B2B'
  },
  buttonGroup: {
    marginTop: 30,
    flexDirection: 'row',
  },
  clearTray: {
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.rejectedColor,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearTrayText: {
    color: Colors.rejectedColor,
    fontSize: 15,
    fontFamily: 'Inter-SemiBold',
  },
});
