import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import { LocalizationContext } from '@contexts/LocalizationContext'
import { SfContainer, ScContainer, MnContainer } from '@components/Container'
import { TcList } from '@components/Tick'
import langAvailable from '@translations/available.json'

const SettingScreen = (props) => {

  const { translate, locale, setLocale } = useContext(LocalizationContext)

  const changeLanguage = (lang) => {
    setLocale(lang.tag)
  }

  return (
    <SfContainer>
      <ScContainer>
        <MnContainer>
          {
            langAvailable.map((lang, index) =>
              <TcList
                key={index}
                title={lang.name}
                onPress={() => changeLanguage(lang)}
                isDone={lang.tag == locale}
                containerStyle={{ height: 50 }}
              />
            )
          }
        </MnContainer>
      </ScContainer>
    </SfContainer>
  )
}

const styles = StyleSheet.create({

})

export default SettingScreen