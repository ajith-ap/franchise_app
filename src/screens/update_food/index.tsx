import {Alert, Image, Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppDropDown from '../../components/AppDropDown';
import {WIN_HEIGHT, WIN_WIDTH} from '../../utils/constant';
import {Colors} from '../../assets/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AddIcon} from '../../assets/images';

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
    setUpdateFoodModal(true)
  };

  /* -------------------------------------------------------------------------- */
  return (
    <View style={styles.container}>

    <StatusBar backgroundColor={showUpdateFoodModal ? 'rgba(0, 0, 0, 0.5)': Colors.white} />
         
      <AppDropDown />
      <View style={styles.foodGrid}>
        {trayList.map((item, i) => (
          <FoodCard handleUpdateFood={handleUpdateFood} key={i} data={item} />
        ))}
      </View>


      <Modal
        animationType="slide"
        transparent={true}
        visible={showUpdateFoodModal}
        // onRequestClose={}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          
          
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
    borderRadius: 10,
    alignItems: 'center',
  },
});
