import {View, Text, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import BackSvg from '../assets/svg/backSvg';
import {useState} from 'react';
import NextBackSvg from '../assets/svg/NextBackSvg';
import PrevSvg from '../assets/svg/PrevSvg';
import {selectSelectedItem} from '../redux/slices/selectedItemSlice';
import {useSelector} from 'react-redux';
import Share from 'react-native-share';

const HistoryScreen = ({ navigation }) => {
  const [page, setPage] = useState(1);
  const selectedItemId = useSelector(selectSelectedItem);

  const handleShare = async (text) => {
    try {
      const shareOptions = {
        title: 'Check out this game story!',
        message: text,
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error sharing:', error);
    }
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
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{backgroundColor: '#d7c08a', borderWidth: 6, borderColor: '#e5d273', padding: 10, borderRadius: 15, alignItems: 'center', position: 'absolute', zIndex: 1,  bottom: 40}}>
          <BackSvg/>
        </TouchableOpacity>
      {selectedItemId === 1 && (
        <>
          <View style={{ position: 'absolute', top: 0, left:20 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 50,
                transform: [{ rotate: '35deg' }],
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

          <View style={{ position: 'absolute', top: '30%', left:20 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{ rotate: '-35deg' }],
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

          <View style={{ position: 'absolute', top: 50, right:'50%' }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 55,
                transform: [{ rotate: '15deg' }],
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

          <View style={{ position: 'absolute', top: 50, right: 50 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{ rotate: '-35deg' }],
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

          <View style={{ position: 'absolute', top: 200, left: 180 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 100,
                transform: [{ rotate: '-35deg' }],
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

          <View style={{ position: 'absolute', bottom: '10%', left: 20 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 80,
                transform: [{ rotate: '35deg' }],
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

          <View style={{ position: 'absolute', bottom: 150, right: 80 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 75,
                transform: [{ rotate: '-25deg' }],
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

          <View style={{ position: 'absolute', bottom: '0%', right: 50 }}>
            <Image
              resizeMode="contain"
              source={require('../assets/img/Crown1.png')}
              style={{
                width: 75,
                transform: [{ rotate: '-25deg' }],
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

        <Text style={styles.title}>Crowns in history</Text>

        {page === 1 && (
          <>
            <View style={{width: "90%",marginTop: 20, backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                Crown of
                Pharaoh Tutankhamun
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                Ancient Egyptian pharaohs wore special crowns that, according to legend, had magical powers. Tutankhamun's crown, found in his tomb, was striking with its golden glow and precious stones. It is believed that it was created to connect the pharaoh with the gods.
              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              {/*<TouchableOpacity onPress={()=>{}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>*/}
              {/*  <NextBackSvg/>*/}
              {/*</TouchableOpacity>*/}
              <TouchableOpacity onPress={()=>{handleShare('Ancient Egyptian pharaohs wore special crowns that, according to legend, had magical powers. Tutankhamun\'s crown, found in his tomb, was striking with its golden glow and precious stones. It is believed that it was created to connect the pharaoh with the gods.\n')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setPage(page+1)}} style={{marginLeft: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <NextBackSvg/>
              </TouchableOpacity>
            </View>
          </>
        )}

        {page === 2 && (
          <>
            <View style={{width: "90%", marginTop: 20,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                The Curse of the British Crown
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                The British crown is adorned with the legendary Koh-i-Noor diamond. It is said that this stone brings misfortune to the men who wear it, which is why the crown is always passed only to queens.              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setPage(page-1)}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <PrevSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{handleShare('The British crown is adorned with the legendary Koh-i-Noor diamond. It is said that this stone brings misfortune to the men who wear it, which is why the crown is always passed only to queens.')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setPage(page+1)}} style={{marginLeft: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <NextBackSvg/>
              </TouchableOpacity>
            </View>
          </>
        )}

        {page === 3 && (
          <>
            <View style={{width: "90%", marginTop: 20,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                Napoleon's Crown - Symbol of Empire
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                Napoleon Bonaparte decided to crown himself to show that he was superior to the Pope. He took the crown from the Pope's hands and put it on his head, proclaiming himself Emperor of France.              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setPage(page-1)}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <PrevSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{handleShare('Napoleon Bonaparte decided to crown himself to show that he was superior to the Pope. He took the crown from the Pope\'s hands and put it on his head, proclaiming himself Emperor of France.')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setPage(page+1)}} style={{marginLeft: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <NextBackSvg/>
              </TouchableOpacity>
            </View>
          </>
        )}

        {page === 4 && (
          <>
            <View style={{width: "90%", marginTop: 20,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                The heaviest crown
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                in the world is the Hungarian Crown of St. Stephen, which weighs over 5 kg. It is difficult to wear even for a few minutes!              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setPage(page-1)}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <PrevSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{handleShare('in the world is the Hungarian Crown of St. Stephen, which weighs over 5 kg. It is difficult to wear even for a few minutes! ')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setPage(page+1)}} style={{marginLeft: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <NextBackSvg/>
              </TouchableOpacity>
            </View>
          </>
        )}

        {page === 5 && (
          <>
            <View style={{width: "90%", marginTop: 20,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                The most expensive crown
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                is the Crown of the British Empire, decorated with 2,868 diamonds, 17 sapphires, 11 emeralds, and 269 pearls.              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setPage(page-1)}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <PrevSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{handleShare('is the Crown of the British Empire, decorated with 2,868 diamonds, 17 sapphires, 11 emeralds, and 269 pearls.')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setPage(page+1)}} style={{marginLeft: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <NextBackSvg/>
              </TouchableOpacity>
            </View>
          </>
        )}

        {page === 6 && (
          <>
            <View style={{width: "90%", marginTop: 20,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', padding: 12, borderRadius: 15, alignItems: 'center'}}>
              <Image
                resizeMode="contain"
                source={require('../assets/img/Crown2.png')}
                style={{
                  width: '40%',
                  height: '30%',
                  // marginTop: 10
                }}
              />
              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 24}}>
                Midas' Crown - Gold That Brings Misfortune
              </Text>

              <Text style={{fontFamily: 'Nunito-Bold', textAlign: 'center', color: '#000', fontSize: 16, marginTop: 24}}>
                Legend says that King Midas was given the gift of turning everything into gold. But when he accidentally touched his food and his family, he realized that wealth was not everything. His crown, made of pure gold, became a symbol of greed.              </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity onPress={()=>{setPage(page-1)}} style={{marginRight: 8,backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', justifyContent: 'center', height: 60, paddingHorizontal: 40, borderRadius: 15, alignItems: 'center', paddingBottom: 8}}>
                <PrevSvg/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{handleShare(' Legend says that King Midas was given the gift of turning everything into gold. But when he accidentally touched his food and his family, he realized that wealth was not everything. His crown, made of pure gold, became a symbol of greed.')}} style={{backgroundColor: '#d7c08a',marginBottom: 16, borderWidth: 6, borderColor: '#e5d273', height: 60, justifyContent: 'center', paddingHorizontal: 40, borderRadius: 15, alignItems: 'center'}}>
                <Text style={{fontFamily: 'Nunito-Bold', color: '#000', fontSize: 18}}>
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

      </ImageBackground>
  );
};

const styles = {
  container: {
    backgroundColor: '#000',
    flex: 1,
    // justifyContent: 'space-between',
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

export default HistoryScreen
