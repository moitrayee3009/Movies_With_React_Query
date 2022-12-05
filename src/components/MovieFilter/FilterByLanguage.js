import React from 'react'
import { Languages, Language } from './FilterByLanguageStyle'

const FilterByLanguage = ({ setLanguage }) => {
  let languageList = [
    { name: 'English', value: 'en-US' },
    { name: 'Swedish', value: 'sv' },
    { name: 'Spanish', value: 'es' },
    { name: 'Korean', value: 'ko' }
  ]

  return (
    <Languages>
      {languageList.map((lan) => {
        return (
          <Language key={lan.value} onClick={() => setLanguage(lan.value)}>
            {lan.name}
          </Language>
        )
      })}
    </Languages>
  )
}

export default FilterByLanguage
