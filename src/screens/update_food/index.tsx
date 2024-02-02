import {
  Alert,
  Image,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppDropDown from '../../components/AppDropDown';
import {WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AddIcon, DownInvisibleIcon} from '../../assets/images';
import SizedBox from '../../components/SizedBox';
import AppButton from '../../components/AppButton';

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
  },
  {
    id: 5,
    title: 'Tray 5',
  },
  {
    id: 6,
    title: 'Tray 6',
  },
];

/* -------------------------------------------------------------------------- */

type Props = {};

const UpdateFood = (props: Props) => {
  const [showUpdateFoodModal, setUpdateFoodModal] = useState(false);
  const [selectFoodModal, setSelectFoodModal] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                                Utils Functions                             */
  /* -------------------------------------------------------------------------- */

  const handleUpdateFood = (id: number, title: string) => {
    setUpdateFoodModal(true);
  };

  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={
          showUpdateFoodModal ? 'rgba(0, 0, 0, 0.5)' : Colors.white
        }
      />

      <AppDropDown />
      <View style={styles.foodGrid}>
        {trayList.map((item, i) => (
          <FoodCard handleUpdateFood={handleUpdateFood} key={i} data={item} />
        ))}
      </View>
      <SizedBox height={20} />

      <TouchableOpacity style={[styles.clearTray, {opacity: 0.5}]}>
        <Text style={styles.clearTrayText}>Clear all Tray</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showUpdateFoodModal}
        // onRequestClose={}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tray 1</Text>
            <View style={styles.LoadContainer}>
              <View style={styles.loadView}>
                <Text style={styles.loadText}>Load : 0</Text>
              </View>
              <SizedBox width={30} />
              <View style={styles.loadView}>
                <Text style={styles.loadText}>Stock : 0</Text>
              </View>
            </View>
            <View style={styles.modalDDContainer}>
              <Text style={styles.dDText}>Breakfast</Text>
              <Image style={styles.dDArrow} source={DownInvisibleIcon} />
            </View>
            <View style={styles.modalDDContainer}>
              <Text style={styles.dDText}>Breakfast</Text>
              <Image style={styles.dDArrow} source={DownInvisibleIcon} />
            </View>
            <View style={styles.countContainer}>
              <AppButton onPress={()=>{}} textColor={Colors.white}  buttonColor={Colors.countButtonColor} height={80} width={80} buttonText={'+'} />
              <SizedBox width={15} />
              <View style={styles.count}>
                <Text style={styles.countText}>10</Text>
              </View>
              <SizedBox width={15} />
              <AppButton onPress={()=>{}} textColor={Colors.white}  buttonColor={Colors.countButtonColor} height={80} width={80} buttonText={'-'} />
            </View>
 
            <View style={styles.buttonGroup}>
              <AppButton onPress={()=>{setUpdateFoodModal(false)}} textColor={Colors.white} buttonColor={Colors.rejectedColor} width={WIN_WIDTH * .36} buttonText="Cancel" />
              <View style={{flex:1}} />
              <AppButton onPress={()=>{}} width={WIN_WIDTH * .36} buttonText="Add" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default UpdateFood;

/* -------------------------------------------------------------------------- */
/*                                    Card                                    */
/* -------------------------------------------------------------------------- */
type FoodCardProps = {
  data: {
    id: number;
    title: string;
  };
  handleUpdateFood: (id: number, title: string) => void;
};

const FoodCard = (props: FoodCardProps) => {
  let {data, handleUpdateFood} = props;

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
    width:WIN_WIDTH-80,
    marginTop:20,
    alignItems:'center',
    paddingHorizontal:20
  },
  dDText:{
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
    flexDirection:'row',
    height:80,
    marginTop:30,
  },
  count:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1, borderRadius:8,
    borderColor:'#00525A40',
    backgroundColor:'#F7FFFA'
  },
  countText:{
    fontFamily:'Inter-Bold',
    fontSize:30,
    color:'#2B2B2B'
  },
  buttonGroup:{
    marginTop:30,
    flexDirection:'row',
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
