import React, { useEffect, useState, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as RNLocalize from 'react-native-localize'
import i18n from 'i18n-js'

import { LocalizationContext } from '@contexts/LocalizationContext'
import { MainTabNavigator } from './navigators'

i18n.fallbacks = true
i18n.translations = {
    en: require('@translations/en.json'),
    ms: require('@translations/ms.json'),
    ar: require('@translations/ar.json'),
}

export const AppNavigator = () => {
    
    const fallback = { languageTag: 'en' }
    const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'ms', 'ar']) || fallback

    const [locale, setLocale] = useState(languageTag)
    const localizationContext = useMemo(
        () => ({
            translate: (scope, options) => i18n.t(scope, { locale, ...options }),
            locale,
            setLocale,
        }),
        [locale]
    )

    const handleLocalizationChange = () => {
        const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'ms', 'ar']) || fallback
        setLocale(languageTag)
    }

    useEffect(() => {
        // console.log('LOCAL', RNLocalize.getLocales())
        RNLocalize.addEventListener('change', handleLocalizationChange)
        return () => {
            RNLocalize.removeEventListener('change', handleLocalizationChange)
        }
    }, [])

    return (
        <LocalizationContext.Provider value={localizationContext}>
            <NavigationContainer>
                <MainTabNavigator />
            </NavigationContainer>
        </LocalizationContext.Provider>
    )
}