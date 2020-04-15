import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { LocalizationContext } from '@contexts/LocalizationContext'
import { SfContainer, MnContainer } from '@components/Container'
import Colors from '@utils/colors'

const HomeScreen = (props) => {

  const { translate } = useContext(LocalizationContext)

  return (
    <SfContainer
      containerColor={Colors.primary}
    >
      <MnContainer
        style={{ justifyContent: 'center' }}
      >
        <View style={[styles.cardContainer, styles.shadow]}>
          <Text style={styles.text}>{translate('doa')}</Text>
        </View>
      </MnContainer>
    </SfContainer>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 30,
    color: Colors.primary,
    fontWeight: 'bold'
  },
  cardContainer: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 400,
    justifyContent: 'center',
  },
  shadow: {
    elevation: 2,
    shadowOffset: { width: 2.5, height: 2.5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
})

export default HomeScreen