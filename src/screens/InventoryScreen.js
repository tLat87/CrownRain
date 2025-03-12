import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import BackSvg from '../assets/svg/backSvg';
import {useDispatch, useSelector} from 'react-redux';
import {selectSelectedItem, setSelectedItem} from '../redux/slices/selectedItemSlice';

const InventoryScreen = ({ navigation }) => {
  const purchasedItems = useSelector((state) => state.purchases.purchasedItems);
  const dispatch = useDispatch();
  const selectedItemId = useSelector(selectSelectedItem);

  const handleSelectItem = (id) => {
    dispatch(setSelectedItem(id));
  };

  return (
    <ImageBackground
      source={
        selectedItemId === 2
          ? require('../assets/img/back1.png')
          : selectedItemId === 3
            ? require('../assets/img/back2.png')
            : null
      }
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: '#d7c08a',
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 10,
          borderRadius: 15,
          alignItems: 'center',
          position: 'absolute',
          zIndex: 1,
          left: 24,
          top: 80,
        }}>
        <BackSvg />
      </TouchableOpacity>
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:100, position:'absolute', top: 50, left: 20, transform: [{ rotate: '35deg' }]}} />*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:70, position:'absolute', top: '20%', left: '45%', transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:80, position:'absolute', top: '30%', left: 20, transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75,  position:'absolute', top: 50, right: 30}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75, position:'absolute', top: '30%', right: 50, transform: [{ rotate: '-25deg' }]}}/>*/}

      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:100, position:'absolute', top: 0, left: 180, transform: [{ rotate: '-35deg' }]}} />*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:70, position:'absolute', bottom: '40%', left: '45%', transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:80, position:'absolute', bottom: '10%', left: 20, transform: [{ rotate: '35deg' }]}}/>*/}
      {/*<Image resizeMode={'contain'} source={require('../assets/img/Crown1.png')} style={{width:75,  position:'absolute', bottom: 150, right: 80}}/>*/}
      {selectedItemId === 1 && (
        <>
      <View style={{position: 'absolute', top: 0, left: 20}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 50,
            transform: [{rotate: '35deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', top: '30%', left: 20}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 80,
            transform: [{rotate: '-35deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', top: 50, right: '50%'}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 55,
            transform: [{rotate: '15deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', top: 50, right: 50}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 80,
            transform: [{rotate: '-35deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', top: 200, left: 180}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 100,
            transform: [{rotate: '-35deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', bottom: '10%', left: 20}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 80,
            transform: [{rotate: '35deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>

      <View style={{position: 'absolute', bottom: 150, right: 80}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 75,
            transform: [{rotate: '-25deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>



      <View style={{position: 'absolute', bottom: '0%', right: 50}}>
        <Image
          resizeMode="contain"
          source={require('../assets/img/Crown1.png')}
          style={{
            width: 75,
            transform: [{rotate: '-25deg'}],
          }}
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            borderRadius: 10,
          }}
        />
      </View>
</>
)}
      <Text style={styles.title}>Inventory</Text>

      <View
        style={{
          backgroundColor: '#d7c08a',
          flexDirection: 'row',
          width: '90%',
          marginBottom: 16,
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 14,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <Image
          // resizeMode="contain"
          source={require('../assets/img/back3.png')}
          style={{
            width: 120,
            borderRadius: 15,
            height: 120,
            marginRight: 16,
          }}
        />
        <View style={{alignItems: 'center', width: '60%'}}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 16,
              width: '80%',
            }}>
            Default game background
          </Text>
          <TouchableOpacity
            onPress={() => {handleSelectItem(1)}}
            style={{
              backgroundColor: '#000',
              width: '100%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 16,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 14}}>
              Choose
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#d7c08a',
          flexDirection: 'row',
          width: '90%',
          marginBottom: 16,
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 14,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <Image
          // resizeMode="contain"
          source={require('../assets/img/back1.png')}
          style={{
            width: 120,
            borderRadius: 15,
            height: 120,
            marginRight: 16,
          }}
        />
        <View style={{alignItems: 'center', width: '60%'}}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 16,
              width: '80%',
            }}>
            game background
          </Text>
          <TouchableOpacity
            disabled={!purchasedItems.some(item => item.id === 2)}
            onPress={() => {handleSelectItem(2)}}
            style={{
              backgroundColor: '#000',
              width: '100%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 16,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 14}}>
              {purchasedItems.some(item => item.id === 2) ? `Choose` : `Not available`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#d7c08a',
          flexDirection: 'row',
          width: '90%',
          marginBottom: 16,
          borderWidth: 6,
          borderColor: '#e5d273',
          padding: 14,
          borderRadius: 15,
          alignItems: 'center',
        }}>
        <Image
          // resizeMode="contain"
          source={require('../assets/img/back2.png')}
          style={{
            width: 120,
            borderRadius: 15,
            height: 120,
            marginRight: 16,
          }}
        />
        <View style={{alignItems: 'center', width: '60%'}}>
          <Text
            style={{
              fontFamily: 'Nunito-Bold',
              color: '#000',
              fontSize: 16,
              width: '80%',
            }}>
            game background
          </Text>
          <TouchableOpacity
            disabled={!purchasedItems.some(item => item.id === 3)}
            onPress={() => {handleSelectItem(3)}}
            style={{
              backgroundColor: '#000',
              width: '100%',
              alignItems: 'center',
              paddingVertical: 20,
              borderWidth: 6,
              borderColor: '#e5d273',
              borderRadius: 15,
              marginTop: 16,
            }}>
            <Text
              style={{fontFamily: 'Nunito-Bold', color: '#fff', fontSize: 14}}>
              {purchasedItems.some(item => item.id === 3) ? `Choose` : `Not available`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 100,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    color: '#d7c08a',
    fontSize: 42,
  },
  levelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
    width: '80%',
  },
  button: {
    backgroundColor: '#d7c08a',
    borderWidth: 6,
    borderColor: '#e5d273',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '30%',
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: 'Nunito-Bold',
    color: '#000',
    fontSize: 24,
  },
  largeButton: {
    width: '40%',
    paddingVertical: 30,
  },
  largeText: {
    fontSize: 34,
  },
};

export default InventoryScreen
