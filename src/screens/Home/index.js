import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import { LocalizationContext } from '@contexts/LocalizationContext'
import { SfContainer, ScContainer, MnContainer } from '@components/Container'

const HomeScreen = (props) => {

  const { translate } = useContext(LocalizationContext)

  return (
    <SfContainer>
      <ScContainer>
        <MnContainer
          style={{ justifyContent: 'center' }}
        >
          <Text style={styles.text}>{translate('doa')}</Text>
        </MnContainer>
      </ScContainer>
    </SfContainer>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center'
  }
})

export default HomeScreen